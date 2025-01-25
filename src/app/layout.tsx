import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";


export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "this is a movie database application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <Provider>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Provider>
      </body>
    </html>
  );
}
