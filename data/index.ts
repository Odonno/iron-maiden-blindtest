export type Album = {
  title: string;
  image: string;
};

export type Song = {
  title: string;
  album: Album;
  soundFile: string;
};

const ironMaiden: Album = {
  title: "Iron Maiden",
  image: "/albums/iron-maiden.jpg",
};

const killers: Album = {
  title: "Killers",
  image: "/albums/killers.jpg",
};

const theNumberOfTheBeast: Album = {
  title: "The Number of the Beast",
  image: "/albums/number-of-the-beast.jpg",
};

const pieceOfMind: Album = {
  title: "Piece of Mind",
  image: "/albums/piece-of-mind.jpg",
};

const powerslave: Album = {
  title: "Powerslave",
  image: "/albums/powerslave.jpg",
};

const somewhereInTime: Album = {
  title: "Somewhere in Time",
  image: "/albums/somewhere-in-time.jpg",
};

const seventhSonOfASeventhSon: Album = {
  title: "Seventh Son of a Seventh Son",
  image: "/albums/seventh-son-of-a-seventh-son.jpg",
};

const noPrayerForTheDying: Album = {
  title: "No Prayer for the Dying",
  image: "/albums/no-prayer-for-the-dying.jpg",
};

const fearOfTheDark: Album = {
  title: "Fear of the Dark",
  image: "/albums/fear-of-the-dark.jpg",
};

const theXFactor: Album = {
  title: "The X Factor",
  image: "/albums/the-x-factor.jpg",
};

const virtualXI: Album = {
  title: "Virtual XI",
  image: "/albums/virtual-xi.jpg",
};

const braveNewWorld: Album = {
  title: "Brave New World",
  image: "/albums/brave-new-world.jpg",
};

const danceOfDeath: Album = {
  title: "Dance of Death",
  image: "/albums/dance-of-death.jpg",
};

const aMatterOfLifeAndDeath: Album = {
  title: "A Matter of Life and Death",
  image: "/albums/a-matter-of-life-and-death.jpg",
};

const theFinalFrontier: Album = {
  title: "The Final Frontier",
  image: "/albums/the-final-frontier.jpg",
};

const theBookOfSouls: Album = {
  title: "The Book of Souls",
  image: "/albums/the-book-of-souls.jpg",
};

const senjutsu: Album = {
  title: "Senjutsu",
  image: "/albums/senjutsu.jpg",
};

export const albums: Album[] = [
  ironMaiden,
  killers,
  pieceOfMind,
  theNumberOfTheBeast,
  powerslave,
  somewhereInTime,
  seventhSonOfASeventhSon,
  noPrayerForTheDying,
  fearOfTheDark,
  theXFactor,
  virtualXI,
  braveNewWorld,
  danceOfDeath,
  aMatterOfLifeAndDeath,
  theFinalFrontier,
  theBookOfSouls,
  senjutsu,
];

export const songs: Song[] = [
  {
    title: "Running Free",
    album: ironMaiden,
    soundFile: "/sounds/iron-maiden/running-free.mp3",
  },
  {
    title: "Phantom of the Opera",
    album: ironMaiden,
    soundFile: "/sounds/iron-maiden/phantom-of-the-opera.mp3",
  },
  {
    title: "Iron Maiden",
    album: ironMaiden,
    soundFile: "/sounds/iron-maiden/iron-maiden.mp3",
  },
  {
    title: "The Ides of March",
    album: killers,
    soundFile: "/sounds/killers/the-ides-of-march.mp3",
  },
  {
    title: "Wrathchild",
    album: killers,
    soundFile: "/sounds/killers/wrathchild.mp3",
  },
  {
    title: "Killers",
    album: killers,
    soundFile: "/sounds/killers/killers.mp3",
  },
  {
    title: "Prodigal Son",
    album: killers,
    soundFile: "/sounds/killers/prodigal-son.mp3",
  },
  {
    title: "Drifter",
    album: killers,
    soundFile: "/sounds/killers/drifter.mp3",
  },
  {
    title: "Children of the Damned",
    album: theNumberOfTheBeast,
    soundFile: "/sounds/number-of-the-beast/children-of-the-damned.mp3",
  },
  {
    title: "The Prisoner",
    album: theNumberOfTheBeast,
    soundFile: "/sounds/number-of-the-beast/the-prisoner.mp3",
  },
  {
    title: "The Number of the Beast",
    album: theNumberOfTheBeast,
    soundFile: "/sounds/number-of-the-beast/the-number-of-the-beast.mp3",
  },
  {
    title: "Run to the Hills",
    album: theNumberOfTheBeast,
    soundFile: "/sounds/number-of-the-beast/run-to-the-hills.mp3",
  },
  {
    title: "Hallowed Be Thy Name",
    album: theNumberOfTheBeast,
    soundFile: "/sounds/number-of-the-beast/hallowed-be-thy-name.mp3",
  },
  {
    title: "Flight of Icarus",
    album: pieceOfMind,
    soundFile: "/sounds/piece-of-mind/flight-of-icarus.mp3",
  },
  {
    title: "The Trooper",
    album: pieceOfMind,
    soundFile: "/sounds/piece-of-mind/the-trooper.mp3",
  },
  {
    title: "To Tame A Land",
    album: pieceOfMind,
    soundFile: "/sounds/piece-of-mind/to-tame-a-land.mp3",
  },
  {
    title: "If Eternity Should Fail",
    album: theBookOfSouls,
    soundFile: "/sounds/the-book-of-souls/if-eternity-should-fail.mp3",
  },
  {
    title: "Speed of Light",
    album: theBookOfSouls,
    soundFile: "/sounds/the-book-of-souls/speed-of-light.mp3",
  },
  {
    title: "The Red And The Black",
    album: theBookOfSouls,
    soundFile: "/sounds/the-book-of-souls/the-red-and-the-black.mp3",
  },
  {
    title: "The Book of Souls",
    album: theBookOfSouls,
    soundFile: "/sounds/the-book-of-souls/the-book-of-souls.mp3",
  },
  {
    title: "Tears of a Clown",
    album: theBookOfSouls,
    soundFile: "/sounds/the-book-of-souls/tears-of-a-clown.mp3",
  },
  {
    title: "Empire of the Clouds",
    album: theBookOfSouls,
    soundFile: "/sounds/the-book-of-souls/empire-of-the-clouds.mp3",
  },
  {
    title: "Stratego",
    album: senjutsu,
    soundFile: "/sounds/senjutsu/stratego.mp3",
  },
  {
    title: "The Writing On The Wall",
    album: senjutsu,
    soundFile: "/sounds/senjutsu/the-writing-on-the-wall.mp3",
  },
  {
    title: "Days of Future Past",
    album: senjutsu,
    soundFile: "/sounds/senjutsu/days-of-future-past.mp3",
  },
  {
    title: "The Parchment",
    album: senjutsu,
    soundFile: "/sounds/senjutsu/the-parchment.mp3",
  },
  {
    title: "Hell On Earth",
    album: senjutsu,
    soundFile: "/sounds/senjutsu/hell-on-earth.mp3",
  },
];
