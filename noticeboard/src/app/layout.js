import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="navbar">
        <Link href="/" className="logo">
          home
        </Link>
        <Link href="/list">List</Link>
        <Link href="/write">Write</Link>
      </div>
        {children}</body>
    </html>
  );
}
