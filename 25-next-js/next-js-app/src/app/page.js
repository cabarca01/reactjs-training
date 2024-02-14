import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <p>
        <Link href="/about">About</Link>
      </p>
    </main>
  );
}
