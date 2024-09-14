import type { Metadata } from "next";
import { noto_serif_jp } from '@/app/ui/fonts';
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Louise Lehman",
  description: "The personal website of Louise Lehman, Senior Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <Script src="https://kit.fontawesome.com/7bc4faa8d3.js" crossOrigin="anonymous"></Script>
      </head>

      <body
        className={`${noto_serif_jp.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
