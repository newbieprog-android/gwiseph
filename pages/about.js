import Link from 'next/link'; 
import Logo from '@/components/Logo';
import Seo from "@/components/seo";
import { useRouter } from 'next/router';
export default function About() {
    const router = useRouter();
  return (
    <>    
      <Seo
        title="About GwisePH – iPhone Price Comparison Tool"
        description="GwisePH helps Filipinos compare Apple gadget prices across premium resellers. No selling. No markup. Just price clarity."
      />

      <main className="font-sans">
        <header className="flex justify-between items-center p-6 bg-white shadow-sm">
          <Logo />
          <nav className="space-x-6 text-sm">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/iphone" className="hover:text-blue-600">iPhone</Link>
            <Link href="/about" className="font-semibold text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </header>

        <section className="max-w-3xl mx-auto text-center p-6">
          <h1 className="text-3xl font-bold mb-4">About GWisePH <span className="text-sm font-normal">"Gadget Wise PH"</span></h1>
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
            Soli Deo Gloria ✨<br />
            <span className="text-xs">— To God be the glory</span>
          </div>
        </section>
      </main>
    </>
  );
}