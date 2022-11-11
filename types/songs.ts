export type Album = {
  title: string;
  image: string;
  blurHash: string;
};

export type Song = {
  title: string;
  album: Album;
  soundFile: string;
};
