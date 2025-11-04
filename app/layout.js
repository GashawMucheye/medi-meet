import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Medical-Meet App',
  description: 'Doctors Appointment App anytime and anywhere',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en' suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className='min-h-screen'>{children}</main>

            <footer>
              <section className='container mx-auto px-4 py-4 text-center bg-muted/50'>
                <p>Made with ❤️by Gashaw</p>
              </section>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
