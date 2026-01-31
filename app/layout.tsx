import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/sidebar";
import { Inter } from "next/font/google";
import { Toaster } from "./_components/ui/sonner";

export const metadata: Metadata = {
  title: "Stockly - Gestão de Estoque",
  description: "Aplicação para gestão de estoque, vendas e produtos.",
};

const inter = Inter({ subsets: ["latin"], display: "auto" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-full">
          <Sidebar />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
