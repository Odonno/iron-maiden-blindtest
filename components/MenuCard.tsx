import * as MenuAtoms from "../state/menu";
import * as SongAtoms from "../state/song";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { PlayIcon } from "./Icons";
import type { MenuOption } from "../types/menu";
import { menuOptions } from "../data/menu";
import { useEffectOnce } from "usehooks-ts";

export const MenuCard = () => {
  const [selectedOption, setSelectedOption] = useAtom(
    MenuAtoms.selectedOptionAtom
  );
  const [playingTime] = useAtom(MenuAtoms.playingTimeAtom);
  const [isSongPrefetched] = useAtom(SongAtoms.isSongPrefetchedAtom);
  const [, reset] = useAtom(MenuAtoms.resetAtom);
  const [, startPlaying] = useAtom(MenuAtoms.startPlayingAtom);

  useEffectOnce(() => {
    reset();
  });

  const handleSelectOptionButtonClick = (option: MenuOption) => {
    setSelectedOption(option);
  };

  const handlePlayButtonClick = () => {
    startPlaying();
  };

  return (
    <div className="relative backdrop-blur-sm backdrop-invert mt-4 px-6 sm:px-12 pt-8 pb-6 sm:pb-8 rounded-md">
      <div className="text-primary text-center font-bold">Select a mode</div>

      <ul className="flex gap-2 mt-4">
        {menuOptions.map((option) => {
          return (
            <li key={option.label}>
              <input
                type="radio"
                id={option.label}
                name="option"
                checked={selectedOption === option}
                className="hidden peer"
                onChange={() => handleSelectOptionButtonClick(option)}
              />
              <label
                htmlFor={option.label}
                className="flex flex-col justify-between items-center px-6 py-4 w-20 bg-primary rounded-md border border-gray-200 cursor-pointer peer-checked:text-red-600 peer-checked:neon-red hover:bg-primary/80"
              >
                <div className="text-2xl">{option.value}</div>
                <div className="text-xs">song{option.value > 1 ? "s" : ""}</div>
              </label>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center items-center mt-4">
        <motion.button
          whileHover={{ scale: isSongPrefetched ? 1.05 : 1 }}
          whileTap={{ scale: isSongPrefetched ? 0.95 : 1 }}
          type="button"
          disabled={!isSongPrefetched}
          className="mt-6 rounded-md flex justify-center items-center bg-primary px-6 py-2 text-xs focus:outline-3 focus:outline-green-400 disabled:bg-primary/20"
          onClick={handlePlayButtonClick}
        >
          <PlayIcon />
          <motion.span className="ml-2">
            Play {playingTime ? `(${playingTime})` : null}
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
};
