import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import "swiper/css";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Real Estate app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased bg-gray8`}>
        {children}
      </body>
    </html>
  );
}
