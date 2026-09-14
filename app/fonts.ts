import localFont from "next/font/local";

export const ibmArabic = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2", weight: "400" },
    { path: "./fonts/ibm-plex-sans-arabic-arabic-500-normal.woff2", weight: "500" },
    { path: "./fonts/ibm-plex-sans-arabic-arabic-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-ibm-arabic",
  display: "swap",
  fallback: [],
});

export const ibmLatin = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-arabic-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/ibm-plex-sans-arabic-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/ibm-plex-sans-arabic-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-ibm-latin",
  display: "swap",
  preload: false,
});

export const tajawalArabic = localFont({
  src: [
    { path: "./fonts/tajawal-arabic-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-tajawal-arabic",
  display: "swap",
  fallback: [],
});

export const tajawalLatin = localFont({
  src: [
    { path: "./fonts/tajawal-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-tajawal-latin",
  display: "swap",
  preload: false,
});
