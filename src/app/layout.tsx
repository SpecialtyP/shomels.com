import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shomels - Sistema Operativo para Empresas Peruanas",
  description:
    "Unifica Ventas, Logística, Finanzas e IA en un solo ecosistema. ERP, CRM, WhatsApp AI, Logistics y más.",
  keywords: [
    "ERP Peru",
    "CRM Peru",
    "facturacion electronica",
    "SUNAT",
    "WhatsApp chatbot",
    "logistica Peru",
    "gestion empresarial",
  ],
  openGraph: {
    title: "Shomels - Sistema Operativo para Empresas Peruanas",
    description:
      "Unifica Ventas, Logística, Finanzas e IA en un solo ecosistema.",
    url: "https://shomels.com",
    siteName: "Shomels",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} noise`}>
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
