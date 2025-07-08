'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'user';
  redirectTo?: string;
}

export default function ProtectedRoute({ 
  children, 
  requiredRole, 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      // Si pas connecté, rediriger vers la page de connexion
      if (!isAuthenticated) {
        router.push(redirectTo);
        return;
      }

      // Si un rôle spécifique est requis
      if (requiredRole && user?.role !== requiredRole) {
        // Si admin requis mais utilisateur normal, rediriger vers l'accueil
        if (requiredRole === 'admin' && user?.role === 'user') {
          router.push('/');
          return;
        }
        // Sinon rediriger vers la page de connexion
        router.push(redirectTo);
        return;
      }
    }
  }, [isAuthenticated, isLoading, user, requiredRole, router, redirectTo]);

  // Afficher un loader pendant la vérification
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    );
  }

  // Si pas connecté ou pas le bon rôle, ne rien afficher (redirection en cours)
  if (!isAuthenticated || (requiredRole && user?.role !== requiredRole)) {
    return null;
  }

  // Si tout est OK, afficher le contenu
  return <>{children}</>;
} 