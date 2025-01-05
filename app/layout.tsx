import type { Metadata } from "next";
import { ibm_plex_mono } from "./fonts/font";
import { ibm_plex_sans } from "./fonts/font";

import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'



import Navbar from "./components/navbar";
import Header from "./components/header";


export const metadata: Metadata = {
  title: "Diany Martínez | Portfolio",
  description: "My web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_mono.className} ${ibm_plex_sans.className} antialiased`}>
        <Navbar />
        <Header />
        {children}
        </body>
    </html>
  );
}
