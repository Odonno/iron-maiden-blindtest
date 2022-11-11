import { atom } from "jotai";
import { atomWithObservable } from "jotai/utils";
import { from, of } from "rxjs";
import { map, startWith } from "rxjs/operators";
import * as GameAtoms from "./game";
import * as ResultAtoms from "./result";

export const currentSongIndexAtom = atom(0);

export const currentSongAtom = atom((get) => {
  const currentSongIndex = get(currentSongIndexAtom);
  const deck = get(GameAtoms.deckAtom);

  return deck[currentSongIndex % deck.length];
});

export const nextSongAtom = atom((get) => {
  const currentSongIndex = get(currentSongIndexAtom);
  const deck = get(GameAtoms.deckAtom);

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
  const deck = get(GameAtoms.deckAtom);

  return deck.length - currentSongIndex - 1;
});

export const hasRemainingSongsAtom = atom((get) => {
  const numberOfRemainingSongs = get(numberOfRemainingSongsAtom);
  return numberOfRemainingSongs > 0;
});
