import * as AnswerAtoms from "../state/answer";
import { useAtom } from "jotai";
import { Suspense, useRef } from "react";
import { ProgressBar } from "./ProgressBar";
import { Suggestions } from "./Suggestions";
import { SoundControls } from "./SoundControls";
import { useEffectOnce } from "usehooks-ts";

export const AnswerCard = () => {
  const [, reset] = useAtom(AnswerAtoms.resetAtom);
  const [answer, setAnswer] = useAtom(AnswerAtoms.answerAtom);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  useEffectOnce(() => {
    reset();
  });

  useEffectOnce(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <SoundControls />

      <div className="w-80 sm:w-96 relative backdrop-blur-sm backdrop-invert mt-4 px-6 sm:px-12 pt-8 pb-6 sm:pb-8 rounded-md">
        <ProgressBar />

        <input
          ref={inputRef}
          type="text"
          className="w-full bg-primary/95 p-3 sm:p-4 rounded-md"
          placeholder="Guess the song"
          value={answer}
          onChange={handleAnswerChange}
        />

        <Suspense>
          <Suggestions />
        </Suspense>
      </div>
    </>
  );
};
