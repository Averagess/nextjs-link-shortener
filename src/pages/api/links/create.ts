import type { NextApiRequest, NextApiResponse } from "next";
import Link from "@/lib/models/link";
import connectDB from "@/lib/db/connectDB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  let { longUrl } = req.body;

  if (!longUrl) return res.status(400).json({ error: "longUrl is required" });
  if (!longUrl.startsWith("https")) longUrl = `https://${longUrl}`;

  const link = await Link.findOne({ longUrl });
  if (link) return res.json(link);
  else {
    const shortUrlKey = Math.random().toString(36).substring(2, 8);
    const newLink = new Link({
      longUrl,
      shortUrl: `${req.headers.host}/links/${shortUrlKey}`,
      shortUrlID: shortUrlKey,
    });
    await newLink.save();
    res.json(newLink);
  }
}
