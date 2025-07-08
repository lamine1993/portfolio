'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ClientFormData {
  id?: number;
  name: string;
  logo: string;
  description: string;
}

export default function ClientForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');
  
  const [formData, setFormData] = useState<ClientFormData>({
    name: '',
    logo: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editId) {
      // Simuler le chargement des données d'un client existant
      setIsEditing(true);
      // En production, vous feriez un appel API ici
      setFormData({
        id: parseInt(editId),
        name: 'ACSA',
        logo: '/ugb.jpg',
        description: 'Agence de Conseil et de Services Agricoles'
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
      console.log('Client à sauvegarder:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(isEditing ? 'Client modifié avec succès !' : 'Client créé avec succès !');
      router.push('/admin');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde du client');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="client-form-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white">
                <h2 className="h4 mb-0">
                  <i className="fas fa-building me-2"></i>
                  {isEditing ? 'Modifier le Client' : 'Nouveau Client'}
                </h2>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="name" className="form-label fw-bold">
                        Nom du client *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Nom de l'entreprise"
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="logo" className="form-label fw-bold">
                        URL du logo
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="logo"
                        name="logo"
                        value={formData.logo}
                        onChange={handleInputChange}
                        placeholder="https://example.com/logo.png"
                      />
                    </div>

                    <div className="col-12 mb-4">
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
                        placeholder="Description du client et de ses services..."
                      />
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
                              {isEditing ? 'Modifier le client' : 'Créer le client'}
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