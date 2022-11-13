import { atom } from "jotai";
import { songMenuOptions } from "../../data/menu";
import type { MenuOption } from "../../types/menu";
import * as GameAtoms from "../../state/game";

export const resetAtom = atom(null, (_get, set) => {
  set(GameAtoms.currentSongIndexAtom, undefined);
  set(selectedOptionAtom, undefined);
  set(selectedOptionAtom, songMenuOptions[0]);
  set(GameAtoms.goodAnsweredSongsAtom, []);
});

export const startPlayingAtom = atom(null, (_get, set) => {
  set(GameAtoms.currentSongIndexAtom, 0);
  set(GameAtoms.currentStepAtom, "preparing_next_song");
});

export const selectedOptionAtom = atom<MenuOption | undefined>(
  songMenuOptions[0]
);

export const playingTimeAtom = atom((get) => {
  const selectedOption = get(selectedOptionAtom);

  if (selectedOption?.label === "Blindtest of the day") {
    return "~3 min";
  }
  if (selectedOption?.label === "10 songs") {
    return "~5 min";
  }
  if (selectedOption?.label === "20 songs") {
    return "~10 min";
  }
  if (selectedOption?.label === "100 songs") {
    return "~1 h";
  }
});
