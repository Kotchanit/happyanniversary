import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ciderFont = localFont({
  src: "/happyanniversary/font/FkCiderRegular.ttf",
  variable: "--font-cider",
});

export const metadata: Metadata = {
  title: "Happy Anniversary",
  description: "A special anniversary celebration",
  icons: "/happyanniversary/heart-favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/happyanniversary/heart-favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${ciderFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
