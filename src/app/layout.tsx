import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://compress.nextooly.com"),
  title: "Compress PDF Online – Reduce PDF File Size | Nextooly",
  description:
    "Compress PDF files online directly in your browser. No uploads. Fast, secure, and private PDF compression by Nextooly.",
  alternates: {
    canonical: "https://compress.nextooly.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
