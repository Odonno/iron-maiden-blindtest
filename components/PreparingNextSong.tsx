import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import * as PreparingAtoms from "../state/preparing";
import * as GameAtoms from "../state/game";
import { useEffectOnce } from "usehooks-ts";

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

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold text-xs">Next song in..</div>

      <div className="mt-6 relative w-20 h-20 bg-primary/80 rounded-full">
        <div className="circle absolute rounded-full w-full h-full"></div>
        <div className="absolute flex justify-center items-center font-bold w-full h-full text-5xl">
          {remainingTime}
        </div>
      </div>
    </div>
  );
};
