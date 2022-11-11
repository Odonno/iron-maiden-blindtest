import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Image from "next/image";
import { BlurhashCanvas } from "react-blurhash";
import type { Song } from "../../types/songs";
import * as AnswerAtoms from "./state";

export const Suggestions = () => {
  const [suggestions] = useAtom(AnswerAtoms.suggestionsAtom);
  const [, chooseAnswer] = useAtom(AnswerAtoms.chooseAnswerAtom);

  const handleSuggestionClick = (song: Song) => {
    chooseAnswer(song);
  };

  if (suggestions.length === 0) {
    return null;
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
                className="w-full bg-primary/95 px-4 py-3 flex justify-center items-center rounded-md focus:outline-3 focus:outline-green-400"
              >
                <div className="relative overflow-hidden z-10">
                  <BlurhashCanvas
                    hash={suggestion.album.blurHash}
                    width={50}
                    height={50}
                    punch={1}
                    className="absolute inset-0 w-full h-full z-[-1]"
                  />
                  <Image
                    src={suggestion.album.image}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <div className="ml-3 flex-1 flex flex-col justify-start items-start">
                  <div className="text-xxs sm:text-xs text-gray-300">
                    {suggestion.album.title}
                  </div>
                  <div className="text-sm sm:text-base text-left">
                    {suggestion.title}
                  </div>
                </div>
              </motion.button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
