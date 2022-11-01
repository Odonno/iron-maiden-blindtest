"use client";

import type { NextPage } from "next";
import { motion } from "framer-motion";
import * as Atoms from "../state/index";
import { useAtom } from "jotai";
import { PlayButton } from "../components/PlayButton";
import { ResultCard } from "../components/ResultCard";
import { AnswerCard } from "../components/AnswerCard";
import { SoundControls } from "../components/SoundControls";

// TODO : complete list of songs
// TODO : fix sync between audio file and audio player

const Home: NextPage = () => {
  const [isPlaying] = useAtom(Atoms.isPlayingAtom);
  const [isGameFinished] = useAtom(Atoms.isGameFinishedAtom);
  const [isSongPrefetched] = useAtom(Atoms.isSongPrefetchedAtom);

  return (
    <div className="text-white">
      <main className="flex flex-col items-center min-h-screen max-h-screen overflow-hidden">
        <h1 className="flex flex-col text-center font-iron-maiden my-6">
          <span className="neon-red text-4xl text-red-600">Iron Maiden</span>
          <span className="neon-blue mt-3 text-3xl text-white">Blind test</span>
        </h1>

        <motion.div
          layout
          className="flex flex-col justify-center items-center flex-1"
        >
          <SoundControls />

          {/* TODO : audio visualization / audio spectrum */}

          {isGameFinished ? (
            <ResultCard />
          ) : (
            <>
              {isSongPrefetched && <PlayButton />}
              {isPlaying && <AnswerCard />}
            </>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
