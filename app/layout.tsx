import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { AuthProvider } from './components/AuthProvider';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio professionnel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          
          <footer className="bg-dark text-white py-4">
            <div className="container text-center">
              <p className="mb-0">© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
            </div>
          </footer>
        </AuthProvider>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
