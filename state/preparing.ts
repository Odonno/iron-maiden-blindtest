import { atom } from "jotai";
import { atomWithObservable } from "jotai/utils";
import { of, animationFrames } from "rxjs";
import { endWith, map, takeWhile } from "rxjs/operators";

export const resetAtom = atom(null, (_get, set) => {
  set(startedAtAtom, new Date());
});

const SECOND = 1000;
const PREPARING_SECONDS = 3;
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
