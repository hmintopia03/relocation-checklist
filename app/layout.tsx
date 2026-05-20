import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relocation Quest",
  description: "A calm phase-based relocation progression app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
