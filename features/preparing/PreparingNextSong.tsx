import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import * as PreparingAtoms from "./state";
import * as GameAtoms from "../../state/game";
import { useEffectOnce } from "usehooks-ts";
import { NextSongCounter } from "../../components/NextSongCounter";

export const PreparingNextSong = () => {
  const [, reset] = useAtom(PreparingAtoms.resetAtom);
  const [, setStartedAt] = useAtom(PreparingAtoms.startedAtAtom);
  const [remainingTime] = useAtom(PreparingAtoms.remainingTimeAtom);
  const [isReady] = useAtom(PreparingAtoms.isReadyAtom);
  const [, setCurrentStep] = useAtom(GameAtoms.currentStepAtom);

  const [isReset, setIsReset] = useState(false);

  useEffectOnce(() => {
    reset();
    setIsReset(true);
  });

  useEffect(() => {
    if (isReset && isReady) {
      setCurrentStep("playing_song");
    }
  }, [isReset, isReady, setCurrentStep, setStartedAt]);

  return <NextSongCounter remainingTime={remainingTime} />;
};
