import { NextApiRequest, NextApiResponse } from "next";
import { songs } from "../../../data/songs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { count: countParam } = req.query as { count: string | undefined };

  // check if count is a number
  if (countParam && isNaN(Number(countParam))) {
    res.status(400).json({ error: "count must be a number" });
    return;
  }

  const playlist = [...songs].sort(() => Math.random() - 0.5);

  const count = countParam ? Number(countParam) : 1;
  const deck = playlist.slice(0, count);

  res.status(200).json(deck);
}
