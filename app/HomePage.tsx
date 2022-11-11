"use client";

import type { NextPage } from "next";
import { motion } from "framer-motion";
import * as GameAtoms from "../state/game";
import { useAtom } from "jotai";
import { SongResultCard } from "../components/SongResultCard";
import { AnswerCard } from "../components/AnswerCard";
import { MenuCard } from "../components/MenuCard";
import { PreparingNextSong } from "../components/PreparingNextSong";
import { EndResultCard } from "../components/EndResultCard";

// TODO : fix sync between audio file and audio player
// TODO : prefecthing next song
// TODO : different solo modes: 1 album
// TODO : tab on suggestions with "filter": by song (current) vs. by album
// TODO : share result on social media (on end result card)

const Home: NextPage = () => {
  const [currentStepAtom] = useAtom(GameAtoms.currentStepAtom);

  return (
    <div className="text-white">
      <main className="flex flex-col items-center min-h-screen max-h-screen overflow-hidden">
        <h1 className="flex flex-col text-center font-iron-maiden my-6">
          <span className="neon-red text-4xl text-red-600">Iron Maiden</span>
          <span className="neon-blue mt-3 text-3xl text-white">Blind test</span>
        </h1>

        <motion.div className="flex flex-col justify-center items-center flex-1">
          {/* TODO : audio visualization / audio spectrum (https://www.remotion.dev/docs/audio-visualization#render-audio-visualization) */}

          {currentStepAtom === "menu" && <MenuCard />}
          {currentStepAtom === "preparing_next_song" && <PreparingNextSong />}
          {currentStepAtom === "playing_song" && <AnswerCard />}
          {currentStepAtom === "song_result" && <SongResultCard />}
          {currentStepAtom === "end_result" && <EndResultCard />}
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
