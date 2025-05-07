import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <Link href="/" className="navbar-brand d-flex align-items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="me-2"
                priority
              />
              <span>Mon Portfolio</span>
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#projets">Projets</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">Expérience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#competences">Compétences</a>
                </li>
                {/*<li className="nav-item">
                  <a className="nav-link" href="#clients">Clients</a>
                </li>*/}
                <li className="nav-item">
                  <a className="nav-link" href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-dark text-white py-4">
          <div className="container text-center">
            <p className="mb-0">© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
          </div>
        </footer>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
