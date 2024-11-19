import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';
import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/app/ui/Home/Header';
import Footer from '@/app/ui/Home/Footer';

type RootLayoutProps = {
  readonly children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
