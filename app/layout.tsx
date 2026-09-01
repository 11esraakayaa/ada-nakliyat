import Script from 'next/script';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ada Nakliyat | Konya Nakliyat ve Yük Taşıma",
  description: "Ada Nakliyat ile Konya şehir içi ve şehirler arası gidiş-dönüş, parsiyel ve komple yük taşımacılığı. Sigortalı ve güvenli taşıma için iletişime geçin.",
  keywords: ["Konya nakliyat", "Konya yük taşıma", "Konya şehirler arası nakliyat", "Konya parsiyel yük", "Konya komple yük", "Ada Nakliyat"],
  openGraph: {
    title: "Ada Nakliyat | Konya Yük Taşıma",
    description: "Şehir içi ve şehirler arası parsiyel veya komple yüklerinizi sigortalı ve güvenli şekilde taşıyoruz.",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/ada-tir-hero.jpeg", width: 1080, height: 1094, alt: "Ada Nakliyat yük taşıma aracı" }],
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/ada-mark.svg", shortcut: "/ada-mark.svg", apple: "/ada-mark.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BGSQYQY55R"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BGSQYQY55R');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
