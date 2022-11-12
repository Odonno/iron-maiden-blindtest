import type { MenuOption } from "../types/menu";

export const blindtestOfTheDayOption: MenuOption = {
  label: "Blindtest of the day",
  type: "custom",
  value: 6,
};

export const menuOptions: MenuOption[] = [
  blindtestOfTheDayOption,
  { label: "1 song", type: "song", value: 1 },
  { label: "10 songs", type: "song", value: 10 },
  { label: "20 songs", type: "song", value: 20 },
  { label: "100 songs", type: "song", value: 100 },
];

export const songMenuOptions = menuOptions.filter(
  (option) => option.type === "song"
);
