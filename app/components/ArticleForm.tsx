'use client';

import { useState } from 'react';

interface ArticleFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
}

export default function ArticleForm() {
  const [formData, setFormData] = useState<ArticleFormData>({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      console.log('Article à sauvegarder:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        category: '',
        image: '',
        date: new Date().toISOString().split('T')[0]
      });
      
      alert('Article sauvegardé avec succès !');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde de l\'article');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="article-form-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white">
                <h2 className="h4 mb-0">
                  <i className="fas fa-edit me-2"></i>
                  Nouvel Article
                </h2>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="title" className="form-label fw-bold">
                        Titre de l'article *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        placeholder="Entrez le titre de votre article"
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="excerpt" className="form-label fw-bold">
                        Résumé *
                      </label>
                      <textarea
                        className="form-control"
                        id="excerpt"
                        name="excerpt"
                        rows={3}
                        value={formData.excerpt}
                        onChange={handleInputChange}
                        required
                        placeholder="Résumé court de l'article"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="category" className="form-label fw-bold">
                        Catégorie *
                      </label>
                      <select
                        className="form-select"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Sélectionnez une catégorie</option>
                        <option value="Développement">Développement</option>
                        <option value="Performance">Performance</option>
                        <option value="Tutoriel">Tutoriel</option>
                        <option value="Technologie">Technologie</option>
                        <option value="Conseils">Conseils</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="date" className="form-label fw-bold">
                        Date de publication
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-12 mb-3">
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

                    <div className="col-12 mb-4">
                      <label htmlFor="content" className="form-label fw-bold">
                        Contenu de l'article *
                      </label>
                      <textarea
                        className="form-control"
                        id="content"
                        name="content"
                        rows={10}
                        value={formData.content}
                        onChange={handleInputChange}
                        required
                        placeholder="Contenu complet de votre article..."
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
                              Sauvegarder l'article
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-lg"
                          onClick={() => {
                            setFormData({
                              title: '',
                              excerpt: '',
                              content: '',
                              category: '',
                              image: '',
                              date: new Date().toISOString().split('T')[0]
                            });
                          }}
                        >
                          <i className="fas fa-undo me-2"></i>
                          Réinitialiser
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