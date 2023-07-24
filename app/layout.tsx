import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
export const metadata: Metadata = {
  title: "Furnish",
  description: "Online Furniture Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
