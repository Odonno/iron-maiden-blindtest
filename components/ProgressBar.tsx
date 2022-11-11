import { useAtom } from "jotai";
import * as AnswerAtoms from "../state/answer";
import classNames from "classnames";

const DISPLAY_PROGRESS = false;

export const ProgressBar = () => {
  const [progress] = useAtom(AnswerAtoms.progressAtom);
  const [remainingTime] = useAtom(AnswerAtoms.remainingTimeAtom);

  return (
    <div
      className={classNames({
        "absolute top-0 right-0 bg-primary rounded-tr-md h-[20px]": true,
        "rounded-tl-md": remainingTime === 0,
        "text-primary/95": !DISPLAY_PROGRESS,
      })}
      style={{
        width: DISPLAY_PROGRESS
          ? progress
            ? 100 - progress + "%"
            : "100%"
          : 0,
      }}
    >
      <div
        className="absolute right-2 font-bold"
        style={{ fontSize: 14 + ((progress ?? 0) / 100) * 10 }}
      >
        {remainingTime !== undefined &&
          remainingTime > 0 &&
          remainingTime.toFixed(remainingTime < 5 ? 1 : 0)}
      </div>
    </div>
  );
};
