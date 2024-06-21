import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coming Soon | Miss Rent",
  description: "Coming Soon | Miss Rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <meta name="facebook-domain-verification" content="2nw0n9nbv9t1npxcf7bvk6v5v6g03z" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
