import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/components/Logo";
import Seo from "@/components/seo";

export default function ContactPage() {
  return (
    <>    
      <Seo
        title="Contact Us – GwisePH"
        description="Contact the GwisePH team."
        keywords="contact GwisePH, iPhone price tracker contact"
      />

      <main className="max-w-2xl mx-auto p-6 font-sans">
        <header className="flex justify-between items-center mb-6">
          <Logo />
          <nav className="space-x-6 text-sm">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/iphone" className="hover:text-blue-600">iPhone</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </nav>
        </header>

        <div className="mb-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover: text-sm">
            {/* Optional icon */}
            <span className="ml-2">   ⬅️ Back to Home</span>   
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-4">Send us a message</h1>
        <p className="text-gray-600 mb-6">
          Want to request a price update or just say hi? We’d love to hear from you —
          totally anonymous!
        </p>

        <form
          action="https://formsubmit.co/aureyogroup@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Keep this form anonymous */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your anonymous message here..."
            className="w-full border rounded p-3 resize-none focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-6">
          Powered by <a href="https://formsubmit.co" target="_blank" className="underline">FormSubmit</a>.
          No login or sign-up needed.
        </p>

        <div className="text-center mt-8">
          <p className="text-gray-500 mb-2">
            Kahit virtual lang ang kape ☕, damang-dama sa puso, Salamat malaking impact💻❤️
          </p>
          <a
            href="https://coff.ee/aureyosystems"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/coffee-button.png"
              alt="Buy Me A Coffee"
              width={200}
              height={40}
              className="mx-auto"
            />
          </a>
        </div>
      </main>
    </>
  );
}