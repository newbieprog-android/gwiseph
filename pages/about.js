import Head from 'next/head';
import Link from 'next/link'; 
import Logo from '@/components/Logo'; // if you're using a Logo component

export default function About() {
  return (
    <>
      <Head>
        <title>About GwisePH</title>
      </Head>
      <main className="p-6 font-sans">
        <header className="flex justify-between items-center mb-6">
          <Logo />
          <nav className="space-x-6 text-sm">
            <a href="/">Home</a>
            <a href="/iphone">iPhone</a>
            <a href="/about" className="font-semibold text-blue-600">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">About GWisePH "Gadget Wise PH"</h1>
          <p className="mb-4 text-lg">
          GWisePH is a lightweight tool designed to help Filipinos compare Gadget prices across premium resellers — all in one place.
        </p>
        <p className="mb-4">
          We’re not a store. We don’t sell anything. We simply track prices and make them easier to compare, so you can make the best decision based on real-time listings.
        </p>
        <p className="mb-4">
          Our goal is to reduce the hassle of price hunting and provide a clean, trustworthy, and unbiased experience — especially for tech buyers looking for transparency.
        </p>
        <p className="mb-4">
          This project is proudly made in the Philippines 🇵🇭 — with tech, trust, and a little caffeine. 
        </p>
        <p className="mb-4">
          The Page is updated weekly with the latest prices from authorized resellers, so you can always find the best deals on your favorite products. 
        </p>
        <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">
          ← Back to Home
        </Link>
        <div className="text-center mt-12 text-sm text-gray-600 italic">
            Soli Deo Gloria ✨
            <br />
             <span className="text-xs">— To God be the glory</span>
            </div>
        </section>
      </main>
    </>
  );
}

