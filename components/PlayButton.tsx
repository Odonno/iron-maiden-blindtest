import { motion } from "framer-motion";
import { useAtom } from "jotai";
import * as Atoms from "../state/index";
import { PlayIcon, StopIcon } from "./Icons";

const CAN_STOP = false;

export const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useAtom(Atoms.isPlayingAtom);
  const [, setStartedAt] = useAtom(Atoms.startedAtAtom);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setStartedAt(new Date());
  };

  const handleStopClick = () => {
    setIsPlaying(false);
    setStartedAt(undefined);
  };

  return (
    <div>
      {!isPlaying && (
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={handlePlayClick}
          className="rounded-full"
        >
          <PlayIcon className="w-[70px] h-[70px]" />
        </motion.button>
      )}

      {CAN_STOP && isPlaying && (
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={handleStopClick}
          className="rounded-full"
        >
          <StopIcon className="w-[70px] h-[70px]" />
        </motion.button>
      )}
    </div>
  );
};
