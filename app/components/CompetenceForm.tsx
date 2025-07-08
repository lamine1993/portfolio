'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface CompetenceFormData {
  id?: number;
  nom: string;
  niveau: number;
  categorie: string;
}

export default function CompetenceForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');
  
  const [formData, setFormData] = useState<CompetenceFormData>({
    nom: '',
    niveau: 50,
    categorie: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editId) {
      setIsEditing(true);
      setFormData({
        id: parseInt(editId),
        nom: 'React',
        niveau: 90,
        categorie: 'Front-end'
      });
    }
  }, [editId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'niveau' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Compétence à sauvegarder:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(isEditing ? 'Compétence modifiée avec succès !' : 'Compétence créée avec succès !');
      router.push('/admin');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde de la compétence');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="competence-form-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white">
                <h2 className="h4 mb-0">
                  <i className="fas fa-code me-2"></i>
                  {isEditing ? 'Modifier la Compétence' : 'Nouvelle Compétence'}
                </h2>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="nom" className="form-label fw-bold">
                        Nom de la compétence *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: React, Node.js, MongoDB..."
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="categorie" className="form-label fw-bold">
                        Catégorie *
                      </label>
                      <select
                        className="form-select"
                        id="categorie"
                        name="categorie"
                        value={formData.categorie}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Sélectionnez une catégorie</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                        <option value="Base de données">Base de données</option>
                        <option value="Outils & Méthodologies">Outils & Méthodologies</option>
                        <option value="Mobile">Mobile</option>
                        <option value="DevOps">DevOps</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="niveau" className="form-label fw-bold">
                        Niveau de maîtrise: {formData.niveau}%
                      </label>
                      <input
                        type="range"
                        className="form-range"
                        id="niveau"
                        name="niveau"
                        min="0"
                        max="100"
                        step="5"
                        value={formData.niveau}
                        onChange={handleInputChange}
                      />
                      <div className="d-flex justify-content-between">
                        <small className="text-muted">Débutant</small>
                        <small className="text-muted">Expert</small>
                      </div>
                    </div>

                    <div className="col-12 mb-4">
                      <div className="progress" style={{ height: '20px' }}>
                        <div 
                          className="progress-bar bg-success" 
                          style={{ width: `${formData.niveau}%` }}
                        >
                          {formData.niveau}%
                        </div>
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
                              {isEditing ? 'Modifier la compétence' : 'Créer la compétence'}
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