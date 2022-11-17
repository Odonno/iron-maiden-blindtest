import type { Album, Song } from "../types/songs";

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
  image: "/albums/virtual-XI.jpg",
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
    title: "Prowler",
    album: ironMaiden,
    soundFile: "/cuts/iron-maiden/prowler.mp3",
  },
  {
    title: "Remember Tomorrow",
    album: ironMaiden,
    soundFile: "/cuts/iron-maiden/remember-tomorrow.mp3",
  },
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
    title: "Transylvania",
    album: ironMaiden,
    soundFile: "/cuts/iron-maiden/transylvania.mp3",
  },
  {
    title: "Strange World",
    album: ironMaiden,
    soundFile: "/cuts/iron-maiden/strange-world.mp3",
  },
  {
    title: "Charlotte the Harlot",
    album: ironMaiden,
    soundFile: "/cuts/iron-maiden/charlotte-the-harlot.mp3",
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
    title: "Murders in the Rue Morgue",
    album: killers,
    soundFile: "/cuts/killers/murders-in-the-rue-morgue.mp3",
  },
  {
    title: "Another Life",
    album: killers,
    soundFile: "/cuts/killers/another-life.mp3",
  },
  {
    title: "Genghis Khan",
    album: killers,
    soundFile: "/cuts/killers/genghis-khan.mp3",
  },
  {
    title: "Innocent Exile",
    album: killers,
    soundFile: "/cuts/killers/innocent-exile.mp3",
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
    title: "Purgatory",
    album: killers,
    soundFile: "/cuts/killers/purgatory.mp3",
  },
  {
    title: "Drifter",
    album: killers,
    soundFile: "/cuts/killers/drifter.mp3",
  },
  {
    title: "Invaders",
    album: theNumberOfTheBeast,
    soundFile: "/cuts/number-of-the-beast/invaders.mp3",
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
    title: "22 Acacia Avenue",
    album: theNumberOfTheBeast,
    soundFile: "/cuts/number-of-the-beast/22-acacia-avenue.mp3",
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
    title: "Gangland",
    album: theNumberOfTheBeast,
    soundFile: "/cuts/number-of-the-beast/gangland.mp3",
  },
  {
    title: "Hallowed Be Thy Name",
    album: theNumberOfTheBeast,
    soundFile: "/cuts/number-of-the-beast/hallowed-be-thy-name.mp3",
  },
  {
    title: "Where Eagles Dare",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/where-eagles-dare.mp3",
  },
  {
    title: "Revelations",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/revelations.mp3",
  },
  {
    title: "Flight of Icarus",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/flight-of-icarus.mp3",
  },
  {
    title: "Die With Your Boots On",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/die-with-your-boots-on.mp3",
  },
  {
    title: "The Trooper",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/the-trooper.mp3",
  },
  {
    title: "Still Life",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/still-life.mp3",
  },
  {
    title: "Quest for Fire",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/quest-for-fire.mp3",
  },
  {
    title: "Sun and Steel",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/sun-and-steel.mp3",
  },
  {
    title: "To Tame A Land",
    album: pieceOfMind,
    soundFile: "/cuts/piece-of-mind/to-tame-a-land.mp3",
  },
  {
    title: "Aces High",
    album: powerslave,
    soundFile: "/cuts/powerslave/aces-high.mp3",
  },
  {
    title: "2 Minutes to Midnight",
    album: powerslave,
    soundFile: "/cuts/powerslave/2-minutes-to-midnight.mp3",
  },
  {
    title: "Losfer Words (Big 'Orra)",
    album: powerslave,
    soundFile: "/cuts/powerslave/losfer-words.mp3",
  },
  {
    title: "Flash of the Blade",
    album: powerslave,
    soundFile: "/cuts/powerslave/flash-of-the-blade.mp3",
  },
  {
    title: "The Duellists",
    album: powerslave,
    soundFile: "/cuts/powerslave/the-duellists.mp3",
  },
  {
    title: "Back in the Village",
    album: powerslave,
    soundFile: "/cuts/powerslave/back-in-the-village.mp3",
  },
  {
    title: "Powerslave",
    album: powerslave,
    soundFile: "/cuts/powerslave/powerslave.mp3",
  },
  {
    title: "Rime of the Ancient Mariner",
    album: powerslave,
    soundFile: "/cuts/powerslave/rime-of-the-ancient-mariner.mp3",
  },
  {
    title: "Caught Somewhere in Time",
    album: somewhereInTime,
    soundFile: "/cuts/somewhere-in-time/caught-somewhere-in-time.mp3",
  },
  {
    title: "Wasted Years",
    album: somewhereInTime,
    soundFile: "/cuts/somewhere-in-time/wasted-years.mp3",
  },
  {
    title: "Sea of Madness",
    album: somewhereInTime,
    soundFile: "/cuts/somewhere-in-time/sea-of-madness.mp3",
  },
  {
    title: "Heaven Can Wait",
    album: somewhereInTime,
    soundFile: "/cuts/somewhere-in-time/heaven-can-wait.mp3",
  },
  {
    title: "The Loneliness of the Long Distance Runner",
    album: somewhereInTime,
    soundFile:
      "/cuts/somewhere-in-time/the-loneliness-of-the-long-distance-runner.mp3",
  },
  {
    title: "Stranger in a Strange Land",
    album: somewhereInTime,
    soundFile: "/cuts/somewhere-in-time/stranger-in-a-strange-land.mp3",
  },
  {
    title: "Déjà-Vu",
    album: somewhereInTime,
    soundFile: "/cuts/somewhere-in-time/deja-vu.mp3",
  },
  {
    title: "Alexander the Great",
    album: somewhereInTime,
    soundFile: "/cuts/somewhere-in-time/alexander-the-great.mp3",
  },
  {
    title: "Moonchild",
    album: seventhSonOfASeventhSon,
    soundFile: "/cuts/seventh-son-of-a-seventh-son/moonchild.mp3",
  },
  {
    title: "Infinite Dreams",
    album: seventhSonOfASeventhSon,
    soundFile: "/cuts/seventh-son-of-a-seventh-son/infinite-dreams.mp3",
  },
  {
    title: "Can I Play with Madness",
    album: seventhSonOfASeventhSon,
    soundFile: "/cuts/seventh-son-of-a-seventh-son/can-i-play-with-madness.mp3",
  },
  {
    title: "The Evil that Men Do",
    album: seventhSonOfASeventhSon,
    soundFile: "/cuts/seventh-son-of-a-seventh-son/the-evil-that-men-do.mp3",
  },
  {
    title: "Seventh Son of a Seventh Son",
    album: seventhSonOfASeventhSon,
    soundFile:
      "/cuts/seventh-son-of-a-seventh-son/seventh-son-of-a-seventh-son.mp3",
  },
  {
    title: "The Prophecy",
    album: seventhSonOfASeventhSon,
    soundFile: "/cuts/seventh-son-of-a-seventh-son/the-prophecy.mp3",
  },
  {
    title: "The Clairvoyant",
    album: seventhSonOfASeventhSon,
    soundFile: "/cuts/seventh-son-of-a-seventh-son/the-clairvoyant.mp3",
  },
  {
    title: "Only the Good Die Young",
    album: seventhSonOfASeventhSon,
    soundFile: "/cuts/seventh-son-of-a-seventh-son/only-the-good-die-young.mp3",
  },
  {
    title: "Tailgunner",
    album: noPrayerForTheDying,
    soundFile: "/cuts/no-prayer-for-the-dying/tailgunner.mp3",
  },
  {
    title: "Holy Smoke",
    album: noPrayerForTheDying,
    soundFile: "/cuts/no-prayer-for-the-dying/holy-smoke.mp3",
  },
  {
    title: "No Prayer for the Dying",
    album: noPrayerForTheDying,
    soundFile: "/cuts/no-prayer-for-the-dying/no-prayer-for-the-dying.mp3",
  },
  {
    title: "Public Enema Number One",
    album: noPrayerForTheDying,
    soundFile: "/cuts/no-prayer-for-the-dying/public-enema-number-one.mp3",
  },
  {
    title: "Fates Warning",
    album: noPrayerForTheDying,
    soundFile: "/cuts/no-prayer-for-the-dying/fates-warning.mp3",
  },
  {
    title: "The Assassin",
    album: noPrayerForTheDying,
    soundFile: "/cuts/no-prayer-for-the-dying/the-assassin.mp3",
  },
  {
    title: "Run Silent Run Deep",
    album: noPrayerForTheDying,
    soundFile: "/cuts/no-prayer-for-the-dying/run-silent-run-deep.mp3",
  },
  {
    title: "Hooks in You",
    album: noPrayerForTheDying,
    soundFile: "/cuts/no-prayer-for-the-dying/hooks-in-you.mp3",
  },
  {
    title: "Bring Your Daughter... to the Slaughter",
    album: noPrayerForTheDying,
    soundFile:
      "/cuts/no-prayer-for-the-dying/bring-your-daughter-to-the-slaughter.mp3",
  },
  {
    title: "Mother Russia",
    album: noPrayerForTheDying,
    soundFile: "/cuts/no-prayer-for-the-dying/mother-russia.mp3",
  },
  {
    title: "Be Quick or Be Dead",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/be-quick-or-be-dead.mp3",
  },
  {
    title: "From Here to Eternity",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/from-here-to-eternity.mp3",
  },
  {
    title: "Afraid to Shoot Strangers",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/afraid-to-shoot-strangers.mp3",
  },
  {
    title: "Fear Is the Key",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/fear-is-the-key.mp3",
  },
  {
    title: "Childhood's End",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/childhoods-end.mp3",
  },
  {
    title: "Wasting Love",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/wasting-love.mp3",
  },
  {
    title: "The Fugitive",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/the-fugitive.mp3",
  },
  {
    title: "Chains of Misery",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/chains-of-misery.mp3",
  },
  {
    title: "The Apparition",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/the-apparition.mp3",
  },
  {
    title: "Judas Be My Guide",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/judas-be-my-guide.mp3",
  },
  {
    title: "Weekend Warrior",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/weekend-warrior.mp3",
  },
  {
    title: "Fear of the Dark",
    album: fearOfTheDark,
    soundFile: "/cuts/fear-of-the-dark/fear-of-the-dark.mp3",
  },
  {
    title: "Sign of the Cross",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/sign-of-the-cross.mp3",
  },
  {
    title: "Lord of the Flies",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/lord-of-the-flies.mp3",
  },
  {
    title: "Man on the Edge",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/man-on-the-edge.mp3",
  },
  {
    title: "Fortunes of War",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/fortunes-of-war.mp3",
  },
  {
    title: "Look for the Truth",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/look-for-the-truth.mp3",
  },
  {
    title: "The Aftermath",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/the-aftermath.mp3",
  },
  {
    title: "Judgement of Heaven",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/judgement-of-heaven.mp3",
  },
  {
    title: "Blood on the World's Hands",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/blood-on-the-worlds-hands.mp3",
  },
  {
    title: "The Edge of Darkness",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/the-edge-of-darkness.mp3",
  },
  {
    title: "2 A.M.",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/2-am.mp3",
  },
  {
    title: "The Unbeliever",
    album: theXFactor,
    soundFile: "/cuts/the-x-factor/the-unbeliever.mp3",
  },
  {
    title: "Futureal",
    album: virtualXI,
    soundFile: "/cuts/virtual-xi/futureal.mp3",
  },
  {
    title: "The Angel and the Gambler",
    album: virtualXI,
    soundFile: "/cuts/virtual-xi/the-angel-and-the-gambler.mp3",
  },
  {
    title: "Lightning Strikes Twice",
    album: virtualXI,
    soundFile: "/cuts/virtual-xi/lightning-strikes-twice.mp3",
  },
  {
    title: "The Clansman",
    album: virtualXI,
    soundFile: "/cuts/virtual-xi/the-clansman.mp3",
  },
  {
    title: "When Two Worlds Collide",
    album: virtualXI,
    soundFile: "/cuts/virtual-xi/when-two-worlds-collide.mp3",
  },
  {
    title: "The Educated Fool",
    album: virtualXI,
    soundFile: "/cuts/virtual-xi/the-educated-fool.mp3",
  },
  {
    title: "Don't Look to the Eyes of a Stranger",
    album: virtualXI,
    soundFile: "/cuts/virtual-xi/dont-look-to-the-eyes-of-a-stranger.mp3",
  },
  {
    title: "Como Estais Amigos",
    album: virtualXI,
    soundFile: "/cuts/virtual-xi/como-estais-amigos.mp3",
  },
  {
    title: "The Wicker Man",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/the-wicker-man.mp3",
  },
  {
    title: "Ghost of the Navigator",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/ghost-of-the-navigator.mp3",
  },
  {
    title: "Brave New World",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/brave-new-world.mp3",
  },
  {
    title: "Blood Brothers",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/blood-brothers.mp3",
  },
  {
    title: "The Mercenary",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/the-mercenary.mp3",
  },
  {
    title: "Dream of Mirrors",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/dream-of-mirrors.mp3",
  },
  {
    title: "The Fallen Angel",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/the-fallen-angel.mp3",
  },
  {
    title: "The Nomad",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/the-nomad.mp3",
  },
  {
    title: "Out of the Silent Planet",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/out-of-the-silent-planet.mp3",
  },
  {
    title: "The Thin Line Between Love & Hate",
    album: braveNewWorld,
    soundFile: "/cuts/brave-new-world/the-thin-line-between-love-and-hate.mp3",
  },
  {
    title: "Wildest Dreams",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/wildest-dreams.mp3",
  },
  {
    title: "Rainmaker",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/rainmaker.mp3",
  },
  {
    title: "No More Lies",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/no-more-lies.mp3",
  },
  {
    title: "Montségur",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/montsegur.mp3",
  },
  {
    title: "Dance of Death",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/dance-of-death.mp3",
  },
  {
    title: "Gates of Tomorrow",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/gates-of-tomorrow.mp3",
  },
  {
    title: "New Frontier",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/new-frontier.mp3",
  },
  {
    title: "Paschendale",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/paschendale.mp3",
  },
  {
    title: "Face in the Sand",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/face-in-the-sand.mp3",
  },
  {
    title: "Age of Innocence",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/age-of-innocence.mp3",
  },
  {
    title: "Journeyman",
    album: danceOfDeath,
    soundFile: "/cuts/dance-of-death/journeyman.mp3",
  },
  {
    title: "Different World",
    album: aMatterOfLifeAndDeath,
    soundFile: "/cuts/a-matter-of-life-and-death/different-world.mp3",
  },
  {
    title: "These Colours Don't Run",
    album: aMatterOfLifeAndDeath,
    soundFile: "/cuts/a-matter-of-life-and-death/these-colours-dont-run.mp3",
  },
  {
    title: "Brighter Than a Thousand Suns",
    album: aMatterOfLifeAndDeath,
    soundFile:
      "/cuts/a-matter-of-life-and-death/brighter-than-a-thousand-suns.mp3",
  },
  {
    title: "The Pilgrim",
    album: aMatterOfLifeAndDeath,
    soundFile: "/cuts/a-matter-of-life-and-death/the-pilgrim.mp3",
  },
  {
    title: "The Longest Day",
    album: aMatterOfLifeAndDeath,
    soundFile: "/cuts/a-matter-of-life-and-death/the-longest-day.mp3",
  },
  {
    title: "Out of the Shadows",
    album: aMatterOfLifeAndDeath,
    soundFile: "/cuts/a-matter-of-life-and-death/out-of-the-shadows.mp3",
  },
  {
    title: "The Reincarnation of Benjamin Breeg",
    album: aMatterOfLifeAndDeath,
    soundFile:
      "/cuts/a-matter-of-life-and-death/the-reincarnation-of-benjamin-breeg.mp3",
  },
  {
    title: "For the Greater Good of God",
    album: aMatterOfLifeAndDeath,
    soundFile:
      "/cuts/a-matter-of-life-and-death/for-the-greater-good-of-god.mp3",
  },
  {
    title: "Lord of Light",
    album: aMatterOfLifeAndDeath,
    soundFile: "/cuts/a-matter-of-life-and-death/lord-of-light.mp3",
  },
  {
    title: "The Legacy",
    album: aMatterOfLifeAndDeath,
    soundFile: "/cuts/a-matter-of-life-and-death/the-legacy.mp3",
  },
  {
    title: "Satellite 15... The Final Frontier",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/satellite-15-the-final-frontier.mp3",
  },
  {
    title: "El Dorado",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/el-dorado.mp3",
  },
  {
    title: "Mother of Mercy",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/mother-of-mercy.mp3",
  },
  {
    title: "Coming Home",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/coming-home.mp3",
  },
  {
    title: "The Alchemist",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/the-alchemist.mp3",
  },
  {
    title: "Isle Of Avalon",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/isle-of-avalon.mp3",
  },
  {
    title: "Starblind",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/starblind.mp3",
  },
  {
    title: "The Talisman",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/the-talisman.mp3",
  },
  {
    title: "The Man Who Would Be King",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/the-man-who-would-be-king.mp3",
  },
  {
    title: "When the Wild Wind Blows",
    album: theFinalFrontier,
    soundFile: "/cuts/the-final-frontier/when-the-wild-wind-blows.mp3",
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
    title: "The Great Unknown",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/the-great-unknown.mp3",
  },
  {
    title: "The Red And The Black",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/the-red-and-the-black.mp3",
  },
  {
    title: "When the River Runs Deep",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/when-the-river-runs-deep.mp3",
  },
  {
    title: "The Book of Souls",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/the-book-of-souls.mp3",
  },
  {
    title: "Death or Glory",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/death-or-glory.mp3",
  },
  {
    title: "Shadows of the Valley",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/shadows-of-the-valley.mp3",
  },
  {
    title: "Tears of a Clown",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/tears-of-a-clown.mp3",
  },
  {
    title: "The Man of Sorrows",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/the-man-of-sorrows.mp3",
  },
  {
    title: "Empire of the Clouds",
    album: theBookOfSouls,
    soundFile: "/cuts/the-book-of-souls/empire-of-the-clouds.mp3",
  },
  {
    title: "Senjutsu",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/senjutsu.mp3",
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
    title: "Lost In A Lost World",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/lost-in-a-lost-world.mp3",
  },
  {
    title: "Days of Future Past",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/days-of-future-past.mp3",
  },
  {
    title: "The Time Machine",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/the-time-machine.mp3",
  },
  {
    title: "Darkest Hours",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/darkest-hours.mp3",
  },
  {
    title: "Death of the Celts",
    album: senjutsu,
    soundFile: "/cuts/senjutsu/death-of-the-celts.mp3",
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
