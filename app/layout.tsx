import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "QR360 — Scan. Share. Connect.",
    template: "%s | QR360",
  },
  description:
    "Create personal and business QR codes, share a premium digital identity card, and manage invoices from one workspace.",
  applicationName: "QR360",
  icons: {
    icon: "/qr360-icon.svg",
    shortcut: "/qr360-icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08110f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
