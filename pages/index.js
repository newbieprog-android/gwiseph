import Head from 'next/head';
import Link from 'next/link';
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>GwisePH – Smart Gadget Price Tracker</title>
        <meta name="description" content="Compare Apple device prices from trusted Philippine resellers." />
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
            <img src="/iphonelineup.png" alt="iPhone 16" className="mx-auto w-128 h-auto" />
          </div>
        </section>
  
          <section className="text-center bg-white py-12">
          <h3 className="text-2xl font-semibold">More Products</h3>
          <p className="text-gray-600 mb-6">Coming Soon.</p>
       
          <div className="mt-6">
            <img src="/morepreview.png" alt="iPhone 16" className="mx-auto w-128 h-auto" />
          </div>
        </section>

      </main>
    </>
  );
}