import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';
import './globals.css';

type RootLayoutProps = {
  readonly children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}