import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ironclad Martial Arts Academy | Bhopal",
  description: "Premium Muay Thai, Brazilian Jiu-Jitsu and youth martial arts training in Bhopal.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
