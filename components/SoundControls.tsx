import { useEffect } from "react";
import useSound from "use-sound";
import * as Atoms from "../state/index";
import { useAtom } from "jotai";

const isProduction = process.env.NODE_ENV === "production";

export const SoundControls = () => {
  const [currentSong] = useAtom(Atoms.currentSongAtom);
  const [isPlaying, setIsPlaying] = useAtom(Atoms.isPlayingAtom);
  const [, setStartedAt] = useAtom(Atoms.startedAtAtom);
  const [, setResult] = useAtom(Atoms.resultAtom);
  const [hasLost] = useAtom(Atoms.hasLostAtom);

  const soundFileUrl = `https://saironmaidenblindtest.blob.core.windows.net${currentSong.soundFile}`;

  const [play, { stop }] = useSound(soundFileUrl, {
    interrupt: true,
    onplay: () => {
      if (!isProduction) {
        console.log("started");
      }
    },
    onpause: () => {
      if (!isProduction) {
        console.log("paused");
      }
    },
    onstop: () => {
      if (!isProduction) {
        console.log("stopped");
      }
    },
    onend: () => {
      if (!isProduction) {
        console.log("finished");
      }
    },
  });

  useEffect(() => {
    if (isPlaying) {
      play();
    }
    if (!isPlaying) {
      stop();
    }
  }, [isPlaying, play, stop]);

  useEffect(() => {
    if (hasLost) {
      setIsPlaying(false);
      setStartedAt(undefined);
      setResult(false);
      stop();
    }
  }, [hasLost, setIsPlaying, setResult, setStartedAt, stop]);

  return <></>;
};
