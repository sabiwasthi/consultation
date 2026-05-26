import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://example.com";
const title = "Free 1:1 Digital Marketing Consultation | Marketing by Sabi";
const description =
  "Book a free 1:1 digital marketing consultation and get a customized growth strategy designed around your business goals.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Marketing by Sabi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
