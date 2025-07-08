import ArticleForm from '../../components/ArticleForm';
import ProtectedRoute from '../../components/ProtectedRoute';
import Link from 'next/link';

export default function ArticleFormPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <div className="form-container">
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Nouvel Article</h1>
            <Link href="/admin" className="btn btn-outline-secondary">
              <i className="fas fa-arrow-left me-2"></i>
              Retour à l'administration
            </Link>
          </div>
          <ArticleForm />
        </div>
      </div>
    </ProtectedRoute>
  );
} 