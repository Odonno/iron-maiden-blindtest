import { atom } from "jotai";
import { menuOptions } from "../../data/menu";
import type { MenuOption } from "../../types/menu";
import * as GameAtoms from "../../state/game";

export const resetAtom = atom(null, (_get, set) => {
  set(GameAtoms.currentSongIndexAtom, undefined);
  set(selectedOptionAtom, undefined);
  set(selectedOptionAtom, menuOptions[0]);
  set(GameAtoms.totalGoodAnsweredSongsAtom, 0);
});

export const startPlayingAtom = atom(null, (_get, set) => {
  set(GameAtoms.currentSongIndexAtom, 0);
  set(GameAtoms.currentStepAtom, "preparing_next_song");
});

export const selectedOptionAtom = atom<MenuOption | undefined>(menuOptions[0]);

export const playingTimeAtom = atom((get) => {
  const selectedOption = get(selectedOptionAtom);

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
