import type { Metadata } from "next";
import { Outfit, Barlow } from "next/font/google";
import "./globals.css";
import { MetaPixel } from "@/components/meta-pixel";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "EMS Restoration — San Diego Water, Mold & Fire Damage Restoration | Veteran-Owned, Insurance Experts",
  description:
    "San Diego's veteran-owned restoration team. Water damage, mold, fire & smoke restoration with 1,000+ insurance claims handled. Licensed CA #1081134. 24/7 emergency response across San Diego County.",
  icons: {
    icon: [
      { url: "/seo/favicon.svg", type: "image/svg+xml" },
      { url: "/seo/favicon.png" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
