import Layout from "@/components/Layout";
import connectDB from "@/lib/db/connectDB";
import link from "@/lib/models/link";
import { Link as LinkInterface } from "@/types";
import Link from "next/link";

export const getServerSideProps = async () => {
  await connectDB();

  const all = await link.find({});

  return {
    props: {
      allLinks: JSON.stringify(all),
    },
  };
};

const All = ({ allLinks }: { allLinks: string }) => {
  const linkList: LinkInterface[] = JSON.parse(allLinks);

  const linkCards = linkList.map((link) => (
    <div
      key={link._id}
      className="bg-white rounded-3xl p-10 m-5 border-gray-400 border-2"
    >
      <Link
        className="text-cyan-500 text-2xl hover:underline"
        href={`/links/${link.shortUrlID}`}
      >
        {link.shortUrl}
      </Link>
      <p className="text-xl text-zinc-600">target: {link.longUrl}</p>
      <table>
        <tbody>
          <tr>
            <td>Created:</td>
            <td className="pl-2">
              <b>{new Date(link.createdAt).toLocaleString()}</b>
            </td>
          </tr>
          <tr>
            <td>Clicks:</td>
            <td className="pl-2">
              <b>{link.clicks}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ));

  return (
    <Layout className="grid place-items-center">
      <div className="font-sans p-2 min-h-[75vh] w-5/6 bg-neutral-800 rounded-3xl">
        <h1 className="text-6xl ml-6 text-white font-semibold underline">
          All links
        </h1>
        <p className="text-xl ml-6 text-zinc-400">Here are all the links</p>
        <p className="text-xl ml-6 text-zinc-400">
          Click on the short link to go to the long link
        </p>
        <div className="grid max-h-[60vh] overflow-auto grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {linkCards}
        </div>
      </div>
    </Layout>
  );
};

export default All;
