import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Medical-Meet App',
  description: 'Doctors Appointment App anytime and anywhere',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <navbar>navbar</navbar>
          <main className='min-h-screen'>{children}</main>

          <footer>
            <section className='container mx-auto px-4 py-4 text-center bg-muted/50'>
              <p>Made with ❤️by Gashaw</p>
            </section>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
