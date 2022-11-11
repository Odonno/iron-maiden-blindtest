import { atom } from "jotai";
import { atomWithObservable } from "jotai/utils";
import { of, from, switchMap } from "rxjs";
import { isServerSide } from "../functions";
import type { Song } from "../types/songs";
import * as MenuAtoms from "./menu";

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
