import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <h1>
            <span>Just Add</span>
            <span>Marmite</span>
          </h1>
          <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className="page-content">
        {children} <Analytics />
      </div>

      <footer>
        <p>Copyright 2025 Just Add Marmite :)</p>
      </footer>
    </div>
  );
}
