import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
     <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logustrans.png"
        alt="GwisePH Logo"
        width={48}
        height={48}
        priority
      />
      <span className="ml-2 text-gray-800 hidden sm:inline">Smart Gadget Price Tracker</span>
    </Link>
  );
}