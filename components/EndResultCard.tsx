import { CheckCircleIcon, PlayIcon } from "./Icons";
import Image from "next/image";
import * as SongAtoms from "../state/song";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useElementSize, useTimeout } from "usehooks-ts";
import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import * as ResultAtoms from "../state/result";
import { SummaryResult } from "./SummaryResult";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const confettiColors = ["#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161"];

export const EndResultCard = () => {
  const [currentSong] = useAtom(SongAtoms.currentSongAtom);
  const [result] = useAtom(ResultAtoms.resultAtom);
  const [isSongPrefetched] = useAtom(SongAtoms.isSongPrefetchedAtom);
  const [displaySummaryResult] = useAtom(ResultAtoms.displaySummaryResultAtom);
  const [canPlayAgain] = useAtom(ResultAtoms.canPlayAgainAtom);
  const [, playAgain] = useAtom(ResultAtoms.playAgainAtom);
  const [, goBackToMenu] = useAtom(ResultAtoms.goBackToMenuAtom);

  const [canDisplayConfetti, setCanDisplayConfetti] = useState(false);

  const [containerRef, { width, height }] = useElementSize();

  useTimeout(() => {
    setCanDisplayConfetti(result === true && width > 0 && height > 0);
  }, 300);

  const handleReplayButtonClick = () => {
    playAgain();
  };

  const handleGoBackToMenuButtonClick = () => {
    goBackToMenu();
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={container}
        initial="hidden"
        animate="show"
        className="backdrop-blur-sm backdrop-invert px-12 py-6 rounded-md flex flex-col items-center"
      >
        {canDisplayConfetti && (
          <Confetti
            width={width}
            height={height}
            recycle={false}
            colors={confettiColors}
          />
        )}

        <motion.div variants={item} className="flex flex-col items-center mb-4">
          {result && (
            <CheckCircleIcon className="w-12 h-12 text-primary rounded-full mb-1" />
          )}

          <div className="text-center text-gray-700">
            {result ? "Indeed!" : "It was"}
          </div>
        </motion.div>

        <motion.div variants={item} className="relative overflow-hidden">
          <BlurhashCanvas
            hash={currentSong.album.blurHash}
            width={200}
            height={200}
            punch={1}
            className="absolute inset-0 w-full h-full z-[-1]"
          />
          <Image
            src={currentSong.album.image}
            alt="Album cover of the song"
            width={200}
            height={200}
          />
        </motion.div>

        <motion.div variants={item} className="mt-4 flex flex-col items-center">
          <div className="text-xs text-gray-700">{currentSong.album.title}</div>
          <div className="text-primary">{currentSong.title}</div>
        </motion.div>

        {displaySummaryResult && (
          <motion.div variants={item}>
            <SummaryResult />
          </motion.div>
        )}

        {canPlayAgain && (
          <motion.button
            variants={item}
            whileHover={{ scale: isSongPrefetched ? 1.05 : 1 }}
            whileTap={{ scale: isSongPrefetched ? 0.95 : 1 }}
            type="button"
            disabled={!isSongPrefetched}
            className="mt-6 rounded-md flex justify-center items-center bg-primary px-6 py-2 text-xs focus:outline-3 focus:outline-green-400 disabled:bg-primary/20"
            onClick={handleReplayButtonClick}
          >
            <PlayIcon />
            <span className="ml-2">Play again?</span>
          </motion.button>
        )}
      </motion.div>

      <motion.button
        variants={item}
        whileHover={{ scale: isSongPrefetched ? 1.05 : 1 }}
        whileTap={{ scale: isSongPrefetched ? 0.95 : 1 }}
        type="button"
        disabled={!isSongPrefetched}
        className="mt-10 rounded-md flex justify-center items-center bg-white text-primary px-6 py-2 text-xs focus:outline-3 focus:outline-green-400 disabled:bg-gray-400"
        onClick={handleGoBackToMenuButtonClick}
      >
        <span className="ml-2">
          {canPlayAgain ? "Or go back to menu" : "Go back to menu"}
        </span>
      </motion.button>
    </>
  );
};
