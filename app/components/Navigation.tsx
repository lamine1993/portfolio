'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from './AuthProvider';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    // Rediriger vers la page de connexion après la déconnexion
    router.push('/login');
  };

  // Sur la page de connexion, afficher seulement le header
  if (pathname === '/login') {
    return (
      <nav className="navbar navbar-light bg-light fixed-top">
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
        </div>
      </nav>
    );
  }

  return (
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
            {isAuthenticated ? (
              <>
                {user?.role === 'admin' ? (
                  // Menu pour les administrateurs
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" href="/admin">Administration</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                        <i className="fas fa-user me-1"></i>
                        {user.firstName}
                      </a>
                      <ul className="dropdown-menu">
                        <li><span className="dropdown-item-text text-muted">Rôle: Administrateur</span></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <button className="dropdown-item" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt me-2"></i>
                            Déconnexion
                          </button>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  // Menu pour les utilisateurs normaux
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="#projets">Projets</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#experience">Expérience</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#competences">Compétences</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                        <i className="fas fa-user me-1"></i>
                        {user?.firstName}
                      </a>
                      <ul className="dropdown-menu">
                        <li><span className="dropdown-item-text text-muted">Rôle: Utilisateur</span></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <button className="dropdown-item" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt me-2"></i>
                            Déconnexion
                          </button>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </>
            ) : (
              // Menu pour les visiteurs non connectés
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#projets">Projets</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">Expérience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#competences">Compétences</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    <i className="fas fa-sign-in-alt me-1"></i>
                    Connexion
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
} 