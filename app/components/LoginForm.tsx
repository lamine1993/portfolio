'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginCredentials } from '../types/auth';
import { users } from '../data/users';
import { useAuth } from './AuthProvider';

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Effacer l'erreur quand l'utilisateur tape
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log('Tentative de connexion avec:', credentials);
      console.log('Utilisateurs disponibles:', users);
      
      // Simulation d'une vérification d'authentification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = users.find(u => 
        u.email === credentials.email && u.password === credentials.password
      );

      console.log('Utilisateur trouvé:', user);

      if (user) {
        // Utiliser le contexte d'authentification
        login(user);
        console.log('Utilisateur connecté:', user);

        // Rediriger selon le rôle
        if (user.role === 'admin') {
          console.log('Redirection vers /admin');
          router.push('/admin');
        } else {
          console.log('Redirection vers /');
          router.push('/');
        }
      } else {
        console.log('Aucun utilisateur trouvé avec ces identifiants');
        setError('Email ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setError('Erreur lors de la connexion');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white text-center py-4">
                <h2 className="h4 mb-0">
                  <i className="fas fa-user-lock me-2"></i>
                  Connexion
                </h2>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      <i className="fas fa-exclamation-triangle me-2"></i>
                      {error}
                    </div>
                  )}
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-bold">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre mot de passe"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Connexion en cours...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Se connecter
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <small className="text-muted">
                    <strong>Comptes de test :</strong><br />
                    Admin: admin@portfolio.com / admin123<br />
                    Manager: manager@portfolio.com / manager123<br />
                    User: user@portfolio.com / user123
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 