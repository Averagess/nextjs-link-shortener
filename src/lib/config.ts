if(!process.env.MONGODB_URI) throw new Error("MONGODB_URI was not defined in .env file")

export const MONGODB_URI = process.env.MONGODB_URI;