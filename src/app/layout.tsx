import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppFooter from "../components/[global]/components/app-footer";
import AppNavbar from "../components/[global]/components/app-navbar";

//region Font Style
const bahamas = localFont({
  src: [
    {
      path: "../../public/fonts/Bahamas.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BahamasBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bahamas",
});

//region Meta Data
export const metadata: Metadata = {
  title: "Dolphin Sound",
  description: "Audio gear website",
};

//region Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bahamas.variable} antialiased`}>
        <AppNavbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
