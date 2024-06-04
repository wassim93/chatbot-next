import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chat from "@/components/Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next Bookbuddy",
  description: "Bookstore for fantasy & mystery novels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chat />

        {children}
      </body>
    </html>
  );
}
