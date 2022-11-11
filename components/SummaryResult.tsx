import { useAtom } from "jotai";
import * as ResultAtoms from "../state/result";

export const SummaryResult = () => {
  const [totalAnsweredSongs] = useAtom(ResultAtoms.totalAnsweredSongsAtom);
  const [totalGoodAnsweredSongs] = useAtom(
    ResultAtoms.totalGoodAnsweredSongsAtom
  );
  const [percentOfGoodAnsweredSongs] = useAtom(
    ResultAtoms.percentOfGoodAnsweredSongsAtom
  );

  return (
    <div className="mt-6 text-primary text-xs">
      <span>
        You correctly guessed {totalGoodAnsweredSongs} out of{" "}
        {totalAnsweredSongs} song{totalAnsweredSongs > 1 ? "s" : ""}
      </span>
      {percentOfGoodAnsweredSongs > 0 && (
        <span> ({percentOfGoodAnsweredSongs} %)</span>
      )}
      <span>.</span>
    </div>
  );
};
