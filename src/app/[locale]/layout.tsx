import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";

type Locales = "en" | "ge" | "fr" | "es";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locales }>;  // Asegúrate de que `params` sea un `Promise`
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;  // Resuelve la promesa para obtener el valor de `locale`

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="max-w-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
