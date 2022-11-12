"use client";

import type { NextPage } from "next";
import * as GameAtoms from "../state/game";
import { useAtom } from "jotai";
import { SongResultCard } from "../features/result/SongResultCard";
import { AnswerCard } from "../features/answer/AnswerCard";
import { MenuCard } from "../features/menu/MenuCard";
import { PreparingNextSong } from "../features/preparing/PreparingNextSong";
import { EndResultCard } from "../features/result/EndResultCard";

// TODO : pre-commit hook (linter, prettier)
// TODO : fix sync between audio file and audio player
// TODO : different solo modes: 1 album
// TODO : tab on suggestions with "filter": by song (current) vs. by album
// TODO : share result on social media (on end result card)
// TODO : audio visualization / audio spectrum (https://www.remotion.dev/docs/audio-visualization#render-audio-visualization)

const Home: NextPage = () => {
  const [currentStepAtom] = useAtom(GameAtoms.currentStepAtom);

  return (
    <div className="text-white">
      <main className="flex flex-col items-center min-h-screen max-h-screen overflow-hidden">
        <h1 className="flex flex-col text-center font-iron-maiden my-6">
          <span className="neon-red text-4xl text-red-600">Iron Maiden</span>
          <span className="neon-blue mt-3 text-3xl text-white">Blind test</span>
        </h1>

        <div className="flex flex-col justify-center items-center flex-1">
          {currentStepAtom === "menu" && <MenuCard />}
          {currentStepAtom === "preparing_next_song" && <PreparingNextSong />}
          {currentStepAtom === "playing_song" && <AnswerCard />}
          {currentStepAtom === "song_result" && <SongResultCard />}
          {currentStepAtom === "end_result" && <EndResultCard />}
        </div>
      </main>
    </div>
  );
};

export default Home;
