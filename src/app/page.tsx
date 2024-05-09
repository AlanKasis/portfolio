import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-column justify-center items-center absolute top-0">
        <Link className="z-20 text-xl" href="/about">
          Know me.
        </Link>
        
    </main>
  );
}
