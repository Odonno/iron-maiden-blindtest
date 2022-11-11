import { atom } from "jotai";
import { atomWithObservable } from "jotai/utils";
import { of, animationFrames } from "rxjs";
import { map } from "rxjs/operators";
import { songs } from "../../data/songs";
import { search } from "../../functions/search";
import type { Song } from "../../types/songs";
import * as ResultAtoms from "../result/state";
import * as GameAtoms from "../../state/game";

export const resetAtom = atom(null, (_get, set) => {
  set(ResultAtoms.resultAtom, undefined);
  set(startedAtAtom, new Date());
  set(answerAtom, "");
});

export const chooseAnswerAtom = atom(
  null,
  (get, set, song: Song | undefined) => {
    const currentSong = get(GameAtoms.currentSongAtom);
    const hasRemainingSongs = get(GameAtoms.hasRemainingSongsAtom);

    const result = song?.title === currentSong.title;
    set(ResultAtoms.resultAtom, result);

    if (result) {
      set(GameAtoms.totalGoodAnsweredSongsAtom, (total) => total + 1);
    }

    if (hasRemainingSongs) {
      set(GameAtoms.currentStepAtom, "song_result");
    } else {
      set(GameAtoms.currentStepAtom, "end_result");
    }
  }
);

const SECOND = 1000;
const SONG_DURATION = 30 * SECOND;

const MAX_SUGGESTIONS = 5;

export const startedAtAtom = atom<Date | undefined>(undefined);

export const isPlayingAtom = atom((get) => {
  const startedAt = get(startedAtAtom);
  return startedAt !== undefined;
});

export const answerAtom = atom("");

export const suggestionsAtom = atom(async (get) => {
  const answer = get(answerAtom);

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

export const hasLostAtom = atom((get) => {
  const isPlaying = get(isPlayingAtom);
  const remainingTime = get(remainingTimeAtom);
  const result = get(ResultAtoms.resultAtom);

  return (
    result === undefined &&
    isPlaying &&
    remainingTime !== undefined &&
    remainingTime < 0
  );
});
