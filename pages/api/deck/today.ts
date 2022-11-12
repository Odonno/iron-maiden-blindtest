import { NextApiRequest, NextApiResponse } from "next";
import { songs } from "../../../data/songs";
const Srand = require("seeded-rand");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timestamp = today.getTime() / 1000;

  const rnd = new Srand();
  rnd.seed(timestamp);

  const count = 6;
  const deck = rnd.sample(songs, count);

  res.status(200).json(deck);
}
