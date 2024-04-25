import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//import fonts
import { quicksand } from "./fonts";

//import global componets
import { Navbar } from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carrtes",
  description: "dasdsasda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
