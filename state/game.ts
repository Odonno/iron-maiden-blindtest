import { atom } from "jotai";
import { atomWithObservable } from "jotai/utils";
import { of, from, switchMap } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { isServerSide } from "../functions";
import type { Song } from "../types/songs";
import * as MenuAtoms from "../features/menu/state";
import * as ResultAtoms from "../features/result/state";

type GameStep =
  | "menu"
  | "preparing_next_song"
  | "playing_song"
  | "song_result"
  | "end_result";

export const currentStepAtom = atom<GameStep>("menu");

export const deckAtom = atomWithObservable((get) => {
  const selectedOption = get(MenuAtoms.selectedOptionAtom);

  if (!selectedOption) {
    return of([] as Song[]);
  }

  const count = selectedOption.value;

  if (isServerSide()) {
    return of([] as Song[]);
  }

  const baseUrl = document.URL;
  const apiUrl = new URL(`/api/deck?count=${count}`, baseUrl);

  return from(fetch(apiUrl)).pipe(
    switchMap((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.clone().json() as Promise<Song[]>;
    })
  );
});

export const currentSongIndexAtom = atom(0);

export const totalGoodAnsweredSongsAtom = atom(0);

export const currentSongAtom = atom((get) => {
  const currentSongIndex = get(currentSongIndexAtom);
  const deck = get(deckAtom);

  return deck[currentSongIndex % deck.length];
});

export const nextSongAtom = atom((get) => {
  const currentSongIndex = get(currentSongIndexAtom);
  const deck = get(deckAtom);

  return deck[currentSongIndex % deck.length];
});

const songPrefetchedAtom = atom((get) => {
  const isGameFinished = get(ResultAtoms.isGameFinishedAtom);
  return isGameFinished ? get(nextSongAtom) : get(currentSongAtom);
});

export const isSongPrefetchedAtom = atomWithObservable<boolean>(
  (get) => {
    const songPrefetched = get(songPrefetchedAtom);

    if (!songPrefetched) {
      return of(false);
    }

    const soundFileUrl = `https://saironmaidenblindtest.blob.core.windows.net${songPrefetched.soundFile}`;

    return from(fetch(soundFileUrl)).pipe(
      map((response) => response.ok),
      startWith(false)
    );
  },
  { initialValue: false }
);

export const numberOfRemainingSongsAtom = atom((get) => {
  const currentSongIndex = get(currentSongIndexAtom);
  const deck = get(deckAtom);

  return deck.length - currentSongIndex - 1;
});

export const hasRemainingSongsAtom = atom((get) => {
  const numberOfRemainingSongs = get(numberOfRemainingSongsAtom);
  return numberOfRemainingSongs > 0;
});
