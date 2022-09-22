import { atom } from "jotai";
import { animationFrames, of } from "rxjs";
import { songs } from "../data";
import { map } from "rxjs/operators";
import { atomWithObservable } from "jotai/utils";
import { search } from "../functions/search";

const SECOND = 1000;
const SONG_DURATION = 30 * SECOND;

const MAX_SUGGESTIONS = 5;

// TODO : random playlist

const getRandomSong = () => songs[Math.floor(Math.random() * songs.length)];

export const currentSongAtom = atom(getRandomSong());
export const isPlayingAtom = atom(false);
export const startedAtAtom = atom<Date | undefined>(undefined);

export const remainingTimeAtom = atomWithObservable<number | undefined>(
  (get) => {
    const startedAt: Date | undefined = get(startedAtAtom);

    if (!startedAt) {
      return of(undefined);
    }

    return animationFrames().pipe(
      map(() => {
        const timeDiff = new Date().getTime() - startedAt.getTime();
        return (SONG_DURATION - timeDiff) / SECOND;
      })
    );
  },
  { initialValue: undefined }
);

export const progressAtom = atomWithObservable<number | undefined>(
  (get) => {
    const startedAt: Date | undefined = get(startedAtAtom);

    if (!startedAt) {
      return of(undefined);
    }

    return animationFrames().pipe(
      map(() => {
        const timeDiff = new Date().getTime() - startedAt.getTime();
        return (timeDiff * 100) / SONG_DURATION;
      })
    );
  },
  { initialValue: undefined }
);

export const answerAtom = atom("");

export const suggestionsAtom = atom(async (get) => {
  const isPlaying = get(isPlayingAtom);
  const answer = get(answerAtom);

  if (!isPlaying) {
    return [];
  }

  if (answer.length >= 2) {
    // full-text search
    const results = await search(answer, MAX_SUGGESTIONS);
    const searchedSuggestions = results.map((id) => songs[id as number]);

    // fill with random suggestions
    const randomSuggestions = songs
      .filter((song) => !searchedSuggestions.includes(song))
      .sort(() => Math.random() - 0.5)
      .slice(0, MAX_SUGGESTIONS - searchedSuggestions.length);

    return searchedSuggestions.concat(randomSuggestions);
  }

  // random suggestions
  return [...songs].sort(() => Math.random() - 0.5).slice(0, MAX_SUGGESTIONS);
});

export const hasLostAtom = atom((get) => {
  const isPlaying = get(isPlayingAtom);
  const remainingTime = get(remainingTimeAtom);
  const result = get(resultAtom);

  return (
    result === undefined &&
    isPlaying &&
    remainingTime !== undefined &&
    remainingTime < 0
  );
});

export const resultAtom = atom<boolean | undefined>(undefined);
