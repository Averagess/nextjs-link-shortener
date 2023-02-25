import type { NextApiRequest, NextApiResponse } from 'next'

import Link from '@/lib/models/link'
import connectDB from '@/lib/db/connectDB';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  
  const links = await Link.find({}).sort({ createdAt: -1 });
  res.status(200).json(links);
}