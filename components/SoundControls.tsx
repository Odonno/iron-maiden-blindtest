import { useEffect } from "react";
import useSound from "use-sound";
import * as SongAtoms from "../state/song";
import { useAtom } from "jotai";
import * as AnswerAtoms from "../state/answer";

const isProduction = process.env.NODE_ENV === "production";

export const SoundControls = () => {
  const [currentSong] = useAtom(SongAtoms.currentSongAtom);
  const [hasLost] = useAtom(AnswerAtoms.hasLostAtom);
  const [, chooseAnswer] = useAtom(AnswerAtoms.chooseAnswerAtom);

  const soundFileUrl = currentSong
    ? `https://saironmaidenblindtest.blob.core.windows.net${currentSong.soundFile}`
    : "";

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
    play();

    return () => stop();
  }, [play, stop]);

  useEffect(() => {
    if (hasLost) {
      chooseAnswer();
      stop();
    }
  }, [hasLost, chooseAnswer, stop]);

  return null;
};
