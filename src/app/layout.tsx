import type { Metadata } from 'next';
import { Syne, Syne_Mono } from 'next/font/google'
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import HomeHeader from '@/components/custom/home-header';
import HeaderSizing from '@/components/custom/header-sizing';
import HeroSection from '@/components/custom/hero-section';

const fontNormal = Syne({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Project Gatekeeper',
  description: 'Free SSL for All',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontNormal.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          enableColorScheme={true}
        >
          < HeaderSizing />
          < HomeHeader />
          {children}
          <div className="h-lvh"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}


