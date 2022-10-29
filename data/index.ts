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

const ironMaiden: Album = {
  title: "Iron Maiden",
  image: "/albums/iron-maiden.jpg",
  blurHash: "UJHnsLR.9xs=$;$|o#s++}N2-TWB;gxujEWC",
};

const killers: Album = {
  title: "Killers",
  image: "/albums/killers.jpg",
  blurHash: "UDC~-R.59KWZ~BtQxrxV=zs*%HR-=yRlbasp",
};

const theNumberOfTheBeast: Album = {
  title: "The Number of the Beast",
  image: "/albums/number-of-the-beast.jpg",
  blurHash: "UGDbj5VtX8k9~Ds:njbH^jxujZs:xJbEW=WC",
};

const pieceOfMind: Album = {
  title: "Piece of Mind",
  image: "/albums/piece-of-mind.jpg",
  blurHash: "UHD+I;IrE3oL}bs.xrs.;UxYWYt6^7ocj?WE",
};

const powerslave: Album = {
  title: "Powerslave",
  image: "/albums/powerslave.jpg",
  blurHash: "UELDV^NF5]NH0[?GT2bI08WA4nRjRNt6#5Rk",
};

const somewhereInTime: Album = {
  title: "Somewhere in Time",
  image: "/albums/somewhere-in-time.jpg",
  blurHash: "U9E30T%0A[os9D4nxbW8~pxa%Nt7-PRNNIRj",
};

const seventhSonOfASeventhSon: Album = {
  title: "Seventh Son of a Seventh Son",
  image: "/albums/seventh-son-of-a-seventh-son.jpg",
  blurHash: "U8J9iK-N1S^hUd?wI[ad009FD4Io^,N3-PIp",
};

const noPrayerForTheDying: Album = {
  title: "No Prayer for the Dying",
  image: "/albums/no-prayer-for-the-dying.jpg",
  blurHash: "UFFF5M-?1UT3VYWYRPR-rLxutOjCafM{%Ls*",
};

const fearOfTheDark: Album = {
  title: "Fear of the Dark",
  image: "/albums/fear-of-the-dark.jpg",
  blurHash: "U68#+^HX00=,?]IBN3,%s=jWNzV@MwkZr;jr",
};

const theXFactor: Album = {
  title: "The X Factor",
  image: "/albums/the-x-factor.jpg",
  blurHash: "U48W:N4:00^*t,M_-oW?ELWA-;Rj~VIoIoj?",
};

const virtualXI: Album = {
  title: "Virtual XI",
  image: "/albums/virtual-xi.jpg",
  blurHash: "UED+G38v$,Bo*|q^Q.a0m*R3NEoGO@pJTdtR",
};

const braveNewWorld: Album = {
  title: "Brave New World",
  image: "/albums/brave-new-world.jpg",
  blurHash: "UIG95zo%M{RPM2R4t8t84Tx]MwoI_MtSM{j]",
};

const danceOfDeath: Album = {
  title: "Dance of Death",
  image: "/albums/dance-of-death.jpg",
  blurHash: "U4E-js5jro3U02}Z11M{04rv9Z=d3nEL;N=x",
};

const aMatterOfLifeAndDeath: Album = {
  title: "A Matter of Life and Death",
  image: "/albums/a-matter-of-life-and-death.jpg",
  blurHash: "U28z+6=Ya00M_4={RkIp0MWrE1bJEM9axu-p",
};

const theFinalFrontier: Album = {
  title: "The Final Frontier",
  image: "/albums/the-final-frontier.jpg",
  blurHash: "U69jZz-@Dznb=wI-SuoH^CbVomxgrgNEWaxI",
};

const theBookOfSouls: Album = {
  title: "The Book of Souls",
  image: "/albums/the-book-of-souls.jpg",
  blurHash: "U57-H7NH00%1~qoJRPW=?vj[%1R*bway-:kC",
};

const senjutsu: Album = {
  title: "Senjutsu",
  image: "/albums/senjutsu.jpg",
  blurHash: "U26aI;$Q01-A}Ho|OTNH,@NaOEXS=xV@XRtR",
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
    soundFile: "/cuts/iron-maiden/running-free.mp3",
  },
  {
    title: "Phantom of the Opera",
    album: ironMaiden,
    soundFile: "/cuts/iron-maiden/phantom-of-the-opera.mp3",
  },
  {
    title: "Iron Maiden",
    album: ironMaiden,
    soundFile: "/cuts/iron-maiden/iron-maiden.mp3",
  },
  {
    title: "The Ides of March",
    album: killers,
    soundFile: "/cuts/killers/the-ides-of-march.mp3",
  },
  {
    title: "Wrathchild",
    album: killers,
    soundFile: "/cuts/killers/wrathchild.mp3",
  },
  {
    title: "Killers",
    album: killers,
    soundFile: "/cuts/killers/killers.mp3",
  },
  {
    title: "Prodigal Son",
    album: killers,
    soundFile: "/cuts/killers/prodigal-son.mp3",
  },
  {
    title: "Drifter",
    album: killers,
    soundFile: "/cuts/killers/drifter.mp3",
  },
  {
    title: "Children of the Damned",
    album: theNumberOfTheBeast,
    soundFile: "/cuts/number-of-the-beast/children-of-the-damned.mp3",
  },
  {
    title: "The Prisoner",
    album: theNumberOfTheBeast,
    soundFile: "/cuts/number-of-the-beast/the-prisoner.mp3",
  },
  {
    title: "The Number of the Beast",
    album: theNumberOfTheBeast,
    soundFile: "/cuts/number-of-the-beast/the-number-of-the-beast.mp3",
  },
  {
    title: "Run to the Hills",
    album: theNumberOfTheBeast,
    soundFile: "/cuts/number-of-the-beast/run-to-the-hills.mp3",
  },
  {
    title: "Hallowed Be Thy Name",
    album: theNumberOfTheBeast,
    soundFile: "/cuts/number-of-the-beast/hallowed-be-thy-name.mp3",
  },
  {
    title: "Flight of Icarus",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/flight-of-icarus.mp3",
  },
  {
    title: "The Trooper",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/the-trooper.mp3",
  },
  {
    title: "To Tame A Land",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/to-tame-a-land.mp3",
  },
  {
    title: "If Eternity Should Fail",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/if-eternity-should-fail.mp3",
  },
  {
    title: "Speed of Light",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/speed-of-light.mp3",
  },
  {
    title: "The Red And The Black",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/the-red-and-the-black.mp3",
  },
  {
    title: "The Book of Souls",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/the-book-of-souls.mp3",
  },
  {
    title: "Tears of a Clown",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/tears-of-a-clown.mp3",
  },
  {
    title: "Empire of the Clouds",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/empire-of-the-clouds.mp3",
  },
  {
    title: "Stratego",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/stratego.mp3",
  },
  {
    title: "The Writing On The Wall",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/the-writing-on-the-wall.mp3",
  },
  {
    title: "Days of Future Past",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/days-of-future-past.mp3",
  },
  {
    title: "The Parchment",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/the-parchment.mp3",
  },
  {
    title: "Hell On Earth",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/hell-on-earth.mp3",
  },
];
