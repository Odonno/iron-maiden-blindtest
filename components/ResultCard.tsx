import { CheckCircleIcon, PlayIcon } from "./Icons";
import Image from "next/image";
import * as Atoms from "../state/index";
import { useAtom } from "jotai";
import { songs } from "../data";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useElementSize } from "usehooks-ts";

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

export const ResultCard = () => {
  const [currentSong, setCurrentSong] = useAtom(Atoms.currentSongAtom);
  const [, setIsPlaying] = useAtom(Atoms.isPlayingAtom);
  const [, setStartedAt] = useAtom(Atoms.startedAtAtom);
  const [result, setResult] = useAtom(Atoms.resultAtom);
  const [, setAnswer] = useAtom(Atoms.answerAtom);

  const [containerRef, { width, height }] = useElementSize();

  const handleReplayButtonClick = () => {
    const getRandomSong = () => songs[Math.floor(Math.random() * songs.length)];

    setAnswer("");
    setResult(undefined);
    setCurrentSong(getRandomSong());

    setTimeout(() => {
      setIsPlaying(true);
      setStartedAt(new Date());
    }, 0);
  };

  return (
    <motion.div
      ref={containerRef}
      variants={container}
      initial="hidden"
      animate="show"
      className="backdrop-blur-sm backdrop-invert px-12 py-6 rounded-md flex flex-col items-center"
    >
      {result && width > 0 && height > 0 && (
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

      <motion.div variants={item}>
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

      <motion.button
        variants={item}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        className="mt-6 rounded-md flex justify-center items-center bg-primary px-6 py-2 text-xs focus:outline-3 focus:outline-green-400"
        onClick={handleReplayButtonClick}
      >
        <PlayIcon />
        <span className="ml-2">Play again?</span>
      </motion.button>
    </motion.div>
  );
};
