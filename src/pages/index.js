import Link from "next/link";

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    <Link href="/about">About</Link>
    <Link href="/robots">
      <button>Robot</button>
    </Link>
  </div>
);

export default Index;
