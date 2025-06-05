// components/Seo.js
import Head from "next/head";

export default function Seo({
  title = "GwisePH – Smart Gadget Price Tracker",
  description = "Track and compare Apple gadget prices from premium PH retailers. Updated regularly for your smart buying decisions.",
  keywords = "GwisePH, iPhone price tracker, Apple Philippines, gadget prices, smart shopping",
  image = "/og-image.png",
  url = "https://gwiseph.vercel.app"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}