import type { Metadata } from "next";
import { ibmArabic, ibmLatin, tajawalArabic, tajawalLatin } from "./fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: siteConfig.title, template: "%s | مقود" },
  description: siteConfig.description,
  openGraph: {
    type: "website", locale: "ar", siteName: "مقود",
    title: siteConfig.title, description: siteConfig.description,
  },
  twitter: {
    card: "summary", title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmArabic.variable} ${ibmLatin.variable} ${tajawalArabic.variable} ${tajawalLatin.variable}`}>
      <body className="min-h-dvh bg-surface font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
