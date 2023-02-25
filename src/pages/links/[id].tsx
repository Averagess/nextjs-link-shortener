import Link from "next/link";
import LinkModel from "@/lib/models/link";
import connectDB from "@/lib/db/connectDB";

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  await connectDB()
  const link = await LinkModel.findOne({ shortUrlID: params.id });

  console.log("link model inside getServerSideProps:", link);
  console.log("link id was passed in getServerSideProps:", params.id);

  if (link) {
    link.clicks++;
    await link.save();
    return {
      redirect: {
        destination: link.longUrl,
      },
    };
  }

  return {
    props: {},
  };
}

export default function LinkPage() {
  return (
    <div className="grid place-items-center w-full h-full bg-gradient-to-br from-purple-700 via-black to-cyan-600">
      <div className="bg-gray-200 rounded-3xl p-10">
        <div className="flex items-center text-zinc-600 font-mono font-bold">
          <h1 className="text-6xl mb-3">404</h1>
          <h1 className="ml-3 text-4xl">Not found</h1>
        </div>
        <h2 className="text-xl">The shortened link you tried to use doesnt exist yet.</h2>
        <h3 className="text-lg">
          You can create one <Link className="text-cyan-600 font-bold underline" href="/">here</Link>
        </h3>
      </div>
    </div>
  );
}
