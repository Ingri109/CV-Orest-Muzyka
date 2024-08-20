
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Orest Muzyka",
  description: "CV Orest Muzyka",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}
export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<RootLayoutProps>) {

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
