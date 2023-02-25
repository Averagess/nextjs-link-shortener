import connectDB from "@/lib/db/connectDB";
import Link from "@/lib/models/link";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const id = req.query.id as string;
  
  const link = await Link.findOne({ shortUrl: id});
  if(!link) return res.status(404).json({ error: "Link not found" });
  res.status(200).json(link);
}