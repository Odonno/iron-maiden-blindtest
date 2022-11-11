import { Index } from "flexsearch";
import { songs } from "../data/songs";

let index: Index;
let isInitialized = false;

const initialize = () => {
  index = new Index({
    language: "en",
    tokenize: "forward",
  });

  songs.forEach((song, id) => {
    index.add(id, song.title);
  });

  return index;
};

export const search = (text: string, limit: number) => {
  if (!isInitialized) {
    initialize();
    isInitialized = true;
  }

  return index.searchAsync(text, { limit });
};
