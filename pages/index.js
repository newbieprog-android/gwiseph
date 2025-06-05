import Head from 'next/head';
import Link from 'next/link';
import Logo from "@/components/Logo";
import Seo from '@/components/Seo';
import Image from 'next/image';

export default function Home() {
  return (
    <><Seo
    title="GwisePH – iPhone Price Comparison Tool"
    description="Compare iPhone prices across premium retailers in the Philippines."
    keywords="iPhone price PH, Apple reseller Philippines, compare iPhone models"
  />
      <Head>
        <title>GwisePH – Smart Gadget Price Tracker</title>
        <meta name="description" content="Track and compare gadget prices from premium PH retailers. Updated regularly for your smart buying decisions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="GwisePH, iPhone price tracker, Apple Philippines, gadget prices, smart shopping" />
        <meta property="og:title" content="GwisePH – Smart Apple Price Tracker" />
        <meta property="og:description" content="Weekly comparison of Apple gadgets from official PH resellers." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://gwiseph.vercel.app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="font-sans">
        <header className="flex justify-between items-center p-6 bg-white shadow-sm">
          <Logo />
          <nav className="space-x-6 text-sm">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <section className="text-center py-16 bg-gray-50">
          <h2 className="text-4xl font-bold mb-4">Compare Gadget Prices in the Philippines</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Stay updated with the latest Gadget prices from authorized retailers across the Philippines. Compare prices and make informed purchasing decisions.</p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <Link href="/iphone" className="px-4 py-2 bg-white rounded-full border shadow hover:bg-gray-100">iPhone</Link>
            <button className="px-4 py-2 bg-white rounded-full border shadow text-gray-400 cursor-not-allowed">MacBooks</button>
            <button className="px-4 py-2 bg-white rounded-full border shadow text-gray-400 cursor-not-allowed">Tablets</button>
            <button className="px-4 py-2 bg-white rounded-full border shadow text-gray-400 cursor-not-allowed">Android</button>
          </div>
        </section>

        <section className="text-center bg-white py-12">
          <h3 className="text-2xl font-semibold">iPhone</h3>
          <p className="text-gray-600 mb-6">“One site. All iPhones. No markup.”</p>
         <div className="flex justify-center gap-4">
                <Link href="/iphone">
                <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-200 transition">
                View Latest Prices
               </button>
                  </Link>
        </div>
          <div className="mt-6">
            <Image
              src="/iphonelineup.png"
              alt="iPhone 16"
              width={512}
              height={256}
              className="mx-auto"
              priority
            />
          </div>
        </section>
  
          <section className="text-center bg-white py-12">
          <h3 className="text-2xl font-semibold">More Products</h3>
          <p className="text-gray-600 mb-6">Coming Soon.</p>
       
          <div className="mt-6">
            <Image
              src="/morepreview.png"
              alt="More Products"
              width={512}
              height={256}
              className="mx-auto"
              priority
            />
          </div>
        </section>

      </main>
    </>
  );
}