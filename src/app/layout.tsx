import "./globals.css";
import { Providers } from "./providers";
import React from "react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

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
      <body>
        <Providers>
          <Navbar />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
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
