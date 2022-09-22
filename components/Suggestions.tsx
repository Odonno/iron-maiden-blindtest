import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Image from "next/image";
import { type Song } from "../data";
import * as Atoms from "../state/index";

export const Suggestions = () => {
  const [currentSong] = useAtom(Atoms.currentSongAtom);
  const [, setAnswer] = useAtom(Atoms.answerAtom);
  const [, setResult] = useAtom(Atoms.resultAtom);
  const [, setIsPlaying] = useAtom(Atoms.isPlayingAtom);
  const [suggestions] = useAtom(Atoms.suggestionsAtom);

  const handleSuggestionClick = (song: Song) => {
    setResult(song.title === currentSong.title);
    setAnswer("");
    setIsPlaying(false);
  };

  if (suggestions.length === 0) {
    return <></>;
  }

  return (
    <div className="mt-4">
      <div className="text-xs text-primary italic">Suggestions</div>

      <ul className="mt-2 flex flex-col">
        {suggestions.map((suggestion) => {
          return (
            <li key={suggestion.title} className="mb-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full bg-primary/95 px-4 py-3 flex rounded-md focus:outline-3 focus:outline-green-400"
              >
                <Image
                  src={suggestion.album.image}
                  alt=""
                  width={50}
                  height={50}
                />
                <div className="ml-3 flex flex-col justify-start items-start">
                  <div className="text-xxs sm:text-xs text-gray-300">
                    {suggestion.album.title}
                  </div>
                  <div className="text-sm sm:text-base">{suggestion.title}</div>
                </div>
              </motion.button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
