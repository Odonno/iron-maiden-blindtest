import { atom } from "jotai";
import * as MenuAtoms from "../menu/state";
import * as GameAtoms from "../../state/game";
import { songMenuOptions } from "../../data/menu";
import { atomWithObservable } from "jotai/utils";
import { animationFrames, of } from "rxjs";
import { endWith, map, takeWhile } from "rxjs/operators";

export const resetAtom = atom(null, (_get, set) => {
  set(startedAtAtom, new Date());
});

export const playNextSongAtom = atom(null, (_get, set) => {
  set(GameAtoms.currentSongIndexAtom, (prev) => (prev || 0) + 1);
  set(GameAtoms.currentStepAtom, "playing_song");
});

export const playAgainAtom = atom(null, (_get, set) => {
  set(MenuAtoms.selectedOptionAtom, undefined);
  set(MenuAtoms.selectedOptionAtom, songMenuOptions[0]);
  set(GameAtoms.goodAnsweredSongsAtom, []);
  set(GameAtoms.currentStepAtom, "preparing_next_song");
});

export const goBackToMenuAtom = atom(null, (_get, set) => {
  set(GameAtoms.currentStepAtom, "menu");
});

const SECOND = 1000;
const PREPARING_SECONDS = 5;
const PREPARING_DURATION = PREPARING_SECONDS * SECOND;

export const startedAtAtom = atom<Date | undefined>(undefined);

const remainingMsAtom = atomWithObservable<number>(
  (get) => {
    const startedAt = get(startedAtAtom);

    if (!startedAt) {
      return of(PREPARING_SECONDS);
    }

    return animationFrames().pipe(
      map(() => {
        const timeDiff = new Date().getTime() - startedAt.getTime();
        return PREPARING_DURATION - timeDiff;
      }),
      takeWhile((ms) => ms >= 0),
      endWith(0)
    );
  },
  { initialValue: PREPARING_SECONDS }
);

export const remainingTimeAtom = atom((get) => {
  const remainingMs = get(remainingMsAtom);
  return Math.ceil(remainingMs / SECOND);
});
export const isReadyAtom = atom((get) => {
  const remainingMs = get(remainingMsAtom);
  return remainingMs <= 0;
});

export const resultAtom = atom<boolean | undefined>(undefined);

export const totalAnsweredSongsAtom = atom((get) => {
  const currentSongIndex = get(GameAtoms.currentSongIndexAtom);
  const currentStep = get(GameAtoms.currentStepAtom);

  const songIndex = currentSongIndex || 0;

  if (currentStep === "song_result" || currentStep === "end_result") {
    return songIndex + 1;
  }

  return songIndex;
});

export const percentOfGoodAnsweredSongsAtom = atom((get) => {
  const totalAnsweredSongs = get(totalAnsweredSongsAtom);
  const totalGoodAnsweredSongs = get(GameAtoms.totalGoodAnsweredSongsAtom);

  return Math.round((totalGoodAnsweredSongs / totalAnsweredSongs) * 100);
});

const isOneSongOptionSelectedAtom = atom((get) => {
  const selectedOption = get(MenuAtoms.selectedOptionAtom);
  return selectedOption?.type === "song" && selectedOption.value === 1;
});

export const displaySummaryResultAtom = atom((get) => {
  const isOneSongOptionSelected = get(isOneSongOptionSelectedAtom);

  return !isOneSongOptionSelected;
});

export const canPlayAgainAtom = atom((get) => {
  const isOneSongOptionSelected = get(isOneSongOptionSelectedAtom);

  return isOneSongOptionSelected;
});

export const colorSongResultAtom = atom((get) => {
  const greenDot = "🟩";
  const redDot = "🟥";

  const deck = get(GameAtoms.deckAtom);
  const goodAnsweredSongs = get(GameAtoms.goodAnsweredSongsAtom);

  const dots = deck.map((song) => {
    if (goodAnsweredSongs.includes(song)) {
      return greenDot;
    }

    return redDot;
  });

  return dots.join("");
});

const appUrl = "https://iron-maiden-blindtest.app/";

export const textToShareAtom = atom((get) => {
  const selectedOption = get(MenuAtoms.selectedOptionAtom);

  if (!selectedOption) {
    return undefined;
  }

  if (selectedOption.value === 1) {
    const result = get(resultAtom);
    const currentSong = get(GameAtoms.currentSongAtom);

    if (!result || !currentSong) {
      return undefined;
    }

    return `I found the song ${currentSong.title} of the album ${currentSong.album.title}, by Iron Maiden!
${appUrl}`;
  }

  if (selectedOption.label === "Blindtest of the day") {
    const totalGoodAnsweredSongs = get(GameAtoms.totalGoodAnsweredSongsAtom);
    const totalAnsweredSongs = get(totalAnsweredSongsAtom);
    const colorSongResult = get(colorSongResultAtom);

    return `I found ${totalGoodAnsweredSongs} of ${totalAnsweredSongs} songs on the blindtest of the day!
${colorSongResult}
${appUrl}`;
  }

  if (selectedOption.value > 1) {
    const totalGoodAnsweredSongs = get(GameAtoms.totalGoodAnsweredSongsAtom);
    const totalAnsweredSongs = get(totalAnsweredSongsAtom);
    const percentOfGoodAnsweredSongs = get(percentOfGoodAnsweredSongsAtom);
    const colorSongResult = get(colorSongResultAtom);

    return `I correctly guessed ${totalGoodAnsweredSongs} out of ${totalAnsweredSongs} song${
      totalAnsweredSongs > 1 ? "s" : ""
    } ${
      percentOfGoodAnsweredSongs > 0 ? `(${percentOfGoodAnsweredSongs} %)` : ""
    }.
${colorSongResult}
${appUrl}`;
  }
});

export const canShareResultsAtom = atom((get) => {
  const textToShare = get(textToShareAtom);
  return !!textToShare;
});
