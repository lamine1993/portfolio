'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ExperienceFormData {
  id?: number;
  titre: string;
  societe: string;
  periode: string;
  description: string;
  technologies: string;
}

export default function ExperienceForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');
  
  const [formData, setFormData] = useState<ExperienceFormData>({
    titre: '',
    societe: '',
    periode: '',
    description: '',
    technologies: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editId) {
      setIsEditing(true);
      setFormData({
        id: parseInt(editId),
        titre: 'Consultant ServiceNow',
        societe: 'Yawize',
        periode: '2021 - Présent',
        description: 'Analyse des besoins, conception et développement sur ServiceNow.',
        technologies: 'ServiceNow, JavaScript, Glide API, REST API'
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
      console.log('Expérience à sauvegarder:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(isEditing ? 'Expérience modifiée avec succès !' : 'Expérience créée avec succès !');
      router.push('/admin');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde de l\'expérience');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="experience-form-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white">
                <h2 className="h4 mb-0">
                  <i className="fas fa-briefcase me-2"></i>
                  {isEditing ? 'Modifier l\'Expérience' : 'Nouvelle Expérience'}
                </h2>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="titre" className="form-label fw-bold">
                        Titre du poste *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="titre"
                        name="titre"
                        value={formData.titre}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: Développeur Full Stack, Consultant..."
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="societe" className="form-label fw-bold">
                        Société *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="societe"
                        name="societe"
                        value={formData.societe}
                        onChange={handleInputChange}
                        required
                        placeholder="Nom de l'entreprise"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="periode" className="form-label fw-bold">
                        Période *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="periode"
                        name="periode"
                        value={formData.periode}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: 2021 - Présent, 2020 - 2022..."
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
                        placeholder="Description détaillée des missions et responsabilités..."
                      />
                    </div>

                    <div className="col-12 mb-4">
                      <label htmlFor="technologies" className="form-label fw-bold">
                        Technologies utilisées
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="technologies"
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleInputChange}
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
                              {isEditing ? 'Modifier l\'expérience' : 'Créer l\'expérience'}
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