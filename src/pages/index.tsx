import { FormEvent, useState } from "react";

import CopyInput from "@/components/CopyInput";
import Layout from "@/components/Layout";
import LinkInput from "@/components/LinkInput";
import Head from "next/head";

const regex =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

export default function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!url || !url.match(regex)) return toggleError();

    setLoading(true);

    try {
      const res = await fetch("/api/links/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl: url }),
      });

      const data = await res.json();
      setLoading(false);
      const link = data.shortUrl;
      setShortUrl(link);
      console.log(data);
      console.log(shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleError = () => {
    setError(true);
    setTimeout(() => setError(false), 5000);
  };

  const resetURLs = () => {
    setShortUrl("");
    setUrl("");
  };

  return (
    <Layout className="grid place-items-center">
      <Head>
        <title>Link Shortener</title>
        <meta name="description" content="Shorten your links" />
      </Head>
      <div className="container grid bg-neutral-800 rounded-xl p-20 place-items-center">
        <h1 className={`text-sky-600 font-sans font-bold text-[64px]`}>Url Shortener</h1>
        <h3 className="pb-5 font-sans text-white text-xl">
          Enter your link to get it shortened
        </h3>
        <div className="grid place-self-center place-items-center w-1/2">
          <div className="h-8">
            {error && (
              <p className="text-red-700 text-xl animate-pulse">
                Please enter a valid url
              </p>
            )}
            {loading && !error && (
              <p className="text-green-500 text-xl animate-pulse">Loading...</p>
            )}
          </div>
          {!shortUrl ? (
            <LinkInput
              handleSubmit={handleSubmit}
              setUrl={setUrl}
              error={error}
              loading={loading}
            />
          ) : (
            <CopyInput value={shortUrl} resetURL={resetURLs} />
          )}
        </div>
      </div>
      </Layout>
    // </div>
  );
}
