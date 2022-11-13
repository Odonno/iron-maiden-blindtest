import { atom } from "jotai";
import { atomWithObservable } from "jotai/utils";
import { of, from, switchMap } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { isServerSide } from "../functions";
import type { Song } from "../types/songs";
import * as MenuAtoms from "../features/menu/state";

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
  const path =
    selectedOption.label === "Blindtest of the day"
      ? "/api/deck/today"
      : `/api/deck?count=${count}`;
  const apiUrl = new URL(path, baseUrl);

  return from(fetch(apiUrl)).pipe(
    switchMap((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.clone().json() as Promise<Song[]>;
    })
  );
});

export const goodAnsweredSongsAtom = atom<Song[]>([]);

export const totalGoodAnsweredSongsAtom = atom((get) => {
  const goodAnsweredSongs = get(goodAnsweredSongsAtom);
  return goodAnsweredSongs.length;
});

export const currentSongIndexAtom = atom<number | undefined>(undefined);

export const currentSongAtom = atom((get) => {
  const currentSongIndex = get(currentSongIndexAtom);

  if (currentSongIndex === undefined) {
    return undefined;
  }

  const deck = get(deckAtom);

  const index = currentSongIndex;
  return deck[index % deck.length];
});

export const nextSongAtom = atom((get) => {
  const currentSongIndex = get(currentSongIndexAtom);
  const deck = get(deckAtom);

  const index = currentSongIndex === undefined ? 0 : currentSongIndex + 1;
  return deck[index % deck.length];
});

export const isSongPrefetchedAtom = atomWithObservable<boolean>(
  (get) => {
    const nextSong = get(nextSongAtom);

    if (!nextSong) {
      return of(true);
    }

    const soundFileUrl = `https://saironmaidenblindtest.blob.core.windows.net${nextSong.soundFile}`;

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

  if (currentSongIndex === undefined) {
    return deck.length;
  }

  return deck.length - currentSongIndex - 1;
});

export const hasRemainingSongsAtom = atom((get) => {
  const numberOfRemainingSongs = get(numberOfRemainingSongsAtom);
  return numberOfRemainingSongs > 0;
});
