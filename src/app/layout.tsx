import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compress PDF Online – Free & Secure | Nextooly",
  description:
    "Compress PDF files online for free. Reduce PDF size directly in your browser with no uploads. Fast, private, and secure PDF compression by Nextooly.",
  applicationName: "Nextooly PDF Compressor",
  authors: [{ name: "Nextooly" }],
  generator: "Next.js",
  keywords: [
    "compress pdf",
    "pdf compressor",
    "reduce pdf size",
    "compress pdf online",
    "pdf compression",
    "nextooly",
  ],
  metadataBase: new URL("https://compress.nextooly.com"),
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
