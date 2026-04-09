import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mita Design | Modern & Professional Framer Websites",
  description: "Stand out from the sea of generic AI websites. I build modern, bespoke Framer websites to help you launch faster and boost conversions.",
  keywords: ["itsmita design", "Mita Design", "Framer templates", "Web Designer", "Framer Web Designer", "Creative Portfolio"],
  openGraph: {
    title: "Mita Design | Modern & Professional Framer Websites",
    description: "Stand out from the sea of generic AI websites. I build modern, bespoke Framer websites to help you launch faster and boost conversions.",
    url: "https://itsmita.design", // You should update this to your actual URL
    siteName: "Mita Design",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/icon.png?v=57', type: 'image/png' }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
