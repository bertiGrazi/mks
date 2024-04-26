import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";

const montserrat = Montserrat({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Capputeeno"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
