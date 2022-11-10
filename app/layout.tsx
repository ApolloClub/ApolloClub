/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="styled-scrollbars">
        <nav id="navbar">
          <Link href="/">Home</Link>
          <Link href="/notes">Notes</Link>
        </nav>
        <main>
          <div className="pages">
            <div id="page1">{children}</div>
            <div id="page2">{children}</div>
            <div id="page3">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
