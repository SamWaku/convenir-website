import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convenir",
  description: "Convenir's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className=" flex">
        <TopNavbar />
        <Navbar />
      </main>
      <body className={inter.className}>
        {" "}
        <div className=" flex-1 px-2 py-4">{children}</div>
      </body>
    </html>
  );
}
