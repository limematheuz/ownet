import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "./globals.css";

type Locales = "en" | "ge" | "fr" | "es";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: Locales};
}) {
  const { locale } = params;

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