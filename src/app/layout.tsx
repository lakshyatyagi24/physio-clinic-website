import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HealRight Physiotherapy — Restore Motion, Reclaim Life | Greater Noida West",
  description:
    "Expert physiotherapy by Dr. Anchal Tyagi (PT) in Greater Noida West. Specialized in orthopedic rehab, sports injury recovery, post-surgical care, and pain management. Book your appointment today.",
  keywords: [
    "physiotherapy Greater Noida West",
    "physiotherapist Shahberi",
    "physical therapy Greater Noida",
    "Dr. Anchal Tyagi",
    "sports injury treatment",
    "orthopedic rehabilitation",
    "post-surgical physiotherapy",
    "back pain treatment",
    "manual therapy",
    "women's health physiotherapy",
    "neurological rehabilitation",
    "physiotherapy clinic near me",
  ],
  authors: [{ name: "Dr. Anchal Tyagi" }],
  creator: "Dr. Anchal Tyagi",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://healrightphysio.com",
    title: "HealRight Physiotherapy — Expert Care by Dr. Anchal Tyagi",
    description: "Personalized physiotherapy care in Greater Noida West. 4+ years of expertise, 1000+ patients treated. Book your consultation today.",
    siteName: "HealRight Physiotherapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealRight Physiotherapy — Restore Motion, Reclaim Life",
    description: "Expert physiotherapy by Dr. Anchal Tyagi in Greater Noida West. Specialized care for all your rehabilitation needs.",
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
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display bg-background-light text-slate-600 antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
