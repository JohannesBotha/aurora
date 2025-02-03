import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Container } from "./comp/container";
import { Navbar } from "./comp/navbar";
import { Footer } from "./comp/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AURORA Tax Services",
  description: "Taxservices for 20+ years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Container>
          <Navbar nav={["Home", "Services", "About", "Contact"]} />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}

{
  /*}


*/
}
