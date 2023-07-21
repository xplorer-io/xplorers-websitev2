import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import React from "react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xplorers",
  description: "Xplorers website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div
            style={{
              width: "95%",
              minHeight: "80vh",
            }}
          >
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
