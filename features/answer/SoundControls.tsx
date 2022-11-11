import { useEffect } from "react";
import useSound from "use-sound";
import * as GameAtoms from "../../state/game";
import { useAtom } from "jotai";
import * as AnswerAtoms from "./state";
import { isProduction } from "../../functions";

export const SoundControls = () => {
  const [currentSong] = useAtom(GameAtoms.currentSongAtom);
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
