import { CheckCircleIcon } from "../../components/Icons";
import Image from "next/image";
import * as GameAtoms from "../../state/game";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useEffectOnce, useElementSize, useTimeout } from "usehooks-ts";
import { useEffect, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import * as ResultAtoms from "./state";
import { SummaryResult } from "./SummaryResult";
import { NextSongCounter } from "../../components/NextSongCounter";

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

export const SongResultCard = () => {
  const [currentSong] = useAtom(GameAtoms.currentSongAtom);
  const [result] = useAtom(ResultAtoms.resultAtom);
  const [displaySummaryResult] = useAtom(ResultAtoms.displaySummaryResultAtom);
  const [remainingTime] = useAtom(ResultAtoms.remainingTimeAtom);
  const [, reset] = useAtom(ResultAtoms.resetAtom);
  const [isReady] = useAtom(ResultAtoms.isReadyAtom);
  const [, playNextSong] = useAtom(ResultAtoms.playNextSongAtom);

  const [canDisplayConfetti, setCanDisplayConfetti] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const [containerRef, { width, height }] = useElementSize();

  useEffectOnce(() => {
    reset();
    setIsReset(true);
  });

  useEffect(() => {
    if (isReset && isReady) {
      playNextSong();
    }
  }, [isReset, isReady, playNextSong]);

  useTimeout(() => {
    setCanDisplayConfetti(result === true && width > 0 && height > 0);
  }, 300);

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

        {currentSong && (
          <>
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

            <motion.div
              variants={item}
              className="mt-4 flex flex-col items-center"
            >
              <div className="text-xs text-gray-700">
                {currentSong.album.title}
              </div>
              <div className="text-primary">{currentSong.title}</div>
            </motion.div>
          </>
        )}

        {displaySummaryResult && (
          <motion.div variants={item}>
            <SummaryResult />
          </motion.div>
        )}
      </motion.div>

      <div className="mt-6">
        <NextSongCounter remainingTime={remainingTime} />
      </div>
    </>
  );
};
