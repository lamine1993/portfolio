'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { User } from '../types/auth';
import { roles } from '../data/users';

interface UserFormData {
  id?: number;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'user' | 'admin';
  firstName: string;
  lastName: string;
}

export default function UserForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');
  
  const [formData, setFormData] = useState<UserFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    firstName: '',
    lastName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (editId) {
      setIsEditing(true);
      setFormData({
        id: parseInt(editId),
        username: 'admin',
        email: 'admin@portfolio.com',
        password: '',
        confirmPassword: '',
        role: 'admin',
        firstName: 'Administrateur',
        lastName: 'Principal'
      });
    }
  }, [editId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Le nom d\'utilisateur est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }

    if (!isEditing && !formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }

    if (!isEditing && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Utilisateur à sauvegarder:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(isEditing ? 'Utilisateur modifié avec succès !' : 'Utilisateur créé avec succès !');
      router.push('/admin');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde de l\'utilisateur');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="user-form-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white">
                <h2 className="h4 mb-0">
                  <i className="fas fa-user-plus me-2"></i>
                  {isEditing ? 'Modifier l\'Utilisateur' : 'Nouvel Utilisateur'}
                </h2>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName" className="form-label fw-bold">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Prénom"
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">{errors.firstName}</div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName" className="form-label fw-bold">
                        Nom *
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Nom"
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">{errors.lastName}</div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="username" className="form-label fw-bold">
                        Nom d'utilisateur *
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                        placeholder="Nom d'utilisateur"
                      />
                      {errors.username && (
                        <div className="invalid-feedback">{errors.username}</div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email *
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="role" className="form-label fw-bold">
                        Rôle *
                      </label>
                      <select
                        className="form-select"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                      >
                        {roles.map(role => (
                          <option key={role.key} value={role.key}>
                            {role.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {!isEditing && (
                      <>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="password" className="form-label fw-bold">
                            Mot de passe *
                          </label>
                          <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required={!isEditing}
                            placeholder="Mot de passe"
                          />
                          {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                          )}
                        </div>

                        <div className="col-md-6 mb-3">
                          <label htmlFor="confirmPassword" className="form-label fw-bold">
                            Confirmer le mot de passe *
                          </label>
                          <input
                            type="password"
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required={!isEditing}
                            placeholder="Confirmer le mot de passe"
                          />
                          {errors.confirmPassword && (
                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                          )}
                        </div>
                      </>
                    )}

                    {isEditing && (
                      <div className="col-12 mb-3">
                        <div className="alert alert-info">
                          <i className="fas fa-info-circle me-2"></i>
                          En mode édition, les champs mot de passe sont masqués pour des raisons de sécurité.
                          Laissez-les vides pour conserver le mot de passe actuel.
                        </div>
                      </div>
                    )}

                    <div className="col-12">
                      <div className="d-flex gap-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg flex-fill"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Sauvegarde en cours...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-save me-2"></i>
                              {isEditing ? 'Modifier l\'utilisateur' : 'Créer l\'utilisateur'}
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-lg"
                          onClick={() => router.push('/admin')}
                        >
                          <i className="fas fa-times me-2"></i>
                          Annuler
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 