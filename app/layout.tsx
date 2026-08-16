import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ada Nakliyat | Konya Nakliyat ve Yük Taşıma",
  description: "Ada Nakliyat ile Konya şehir içi ve şehirler arası yük taşıma hizmetleri. Telefon veya WhatsApp üzerinden doğrudan iletişime geçin.",
  keywords: ["Konya nakliyat", "Konya yük taşıma", "Konya şehirler arası nakliyat", "Ada Nakliyat"],
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
