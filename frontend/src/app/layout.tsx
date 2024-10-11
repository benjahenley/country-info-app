import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-VariableItalic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
