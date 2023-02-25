import { Link } from "@/types";
import mongoose from "mongoose";

const linkSchema = new mongoose.Schema<Link>({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  shortUrlID: {
    type: String,
    required: true,
    unique: true
  },
  clicks: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });
  
export default mongoose.models.Link || mongoose.model("Link", linkSchema);