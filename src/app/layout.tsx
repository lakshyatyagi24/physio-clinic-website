import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HealRight Physiotherapy — Restore Motion, Reclaim Life",
  description:
    "Expert physiotherapy tailored to your unique recovery journey. Book your appointment today at HealRight Physiotherapy.",
  keywords: [
    "physiotherapy",
    "physical therapy",
    "rehabilitation",
    "pain relief",
    "sports injury",
    "manual therapy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
