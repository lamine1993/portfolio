'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ProjetFormData {
  id?: number;
  titre: string;
  description: string;
  image: string;
  technologies: string;
  lien?: string;
}

export default function ProjetForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');
  
  const [formData, setFormData] = useState<ProjetFormData>({
    titre: '',
    description: '',
    image: '',
    technologies: '',
    lien: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editId) {
      setIsEditing(true);
      setFormData({
        id: parseInt(editId),
        titre: 'Projet Acsa',
        description: 'Le projet ACSA met en place une plateforme numérique visant à connecter les producteurs aux marchés.',
        image: '/acsa.jpg',
        technologies: 'Ionic, Cordova, TypeScript, HTML, CSS, JavaScript',
        lien: 'https://example.com'
      });
    }
  }, [editId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Projet à sauvegarder:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(isEditing ? 'Projet modifié avec succès !' : 'Projet créé avec succès !');
      router.push('/admin');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde du projet');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="projet-form-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white">
                <h2 className="h4 mb-0">
                  <i className="fas fa-project-diagram me-2"></i>
                  {isEditing ? 'Modifier le Projet' : 'Nouveau Projet'}
                </h2>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="titre" className="form-label fw-bold">
                        Titre du projet *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="titre"
                        name="titre"
                        value={formData.titre}
                        onChange={handleInputChange}
                        required
                        placeholder="Nom du projet"
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="description" className="form-label fw-bold">
                        Description *
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        placeholder="Description détaillée du projet..."
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="image" className="form-label fw-bold">
                        URL de l'image
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="lien" className="form-label fw-bold">
                        Lien du projet
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="lien"
                        name="lien"
                        value={formData.lien}
                        onChange={handleInputChange}
                        placeholder="https://example.com/projet"
                      />
                    </div>

                    <div className="col-12 mb-4">
                      <label htmlFor="technologies" className="form-label fw-bold">
                        Technologies utilisées *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="technologies"
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: React, Node.js, MongoDB (séparées par des virgules)"
                      />
                      <div className="form-text">
                        Séparez les technologies par des virgules
                      </div>
                    </div>

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
                              {isEditing ? 'Modifier le projet' : 'Créer le projet'}
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