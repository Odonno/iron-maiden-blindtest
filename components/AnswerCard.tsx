import * as Atoms from "../state/index";
import { useAtom } from "jotai";
import { Suspense, useEffect, useRef } from "react";
import { ProgressBar } from "./ProgressBar";
import { Suggestions } from "./Suggestions";

export const AnswerCard = () => {
  const [answer, setAnswer] = useAtom(Atoms.answerAtom);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
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
  );
};
