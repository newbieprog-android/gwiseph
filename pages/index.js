import Head from "next/head";
import Index from "../components/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>GwisePH – Smart Gadget Price Tracker</title>
        <meta
          name="description"
          content="Compare Apple product prices from authorized retailers in the Philippines. Stay updated, shop smart."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Index />
    </>
  );
}