import ExperienceForm from '../../components/ExperienceForm';
import ProtectedRoute from '../../components/ProtectedRoute';
import Link from 'next/link';

export default function ExperienceFormPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <div className="form-container">
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Gestion des Expériences</h1>
            <Link href="/admin" className="btn btn-outline-secondary">
              <i className="fas fa-arrow-left me-2"></i>
              Retour à l'administration
            </Link>
          </div>
          <ExperienceForm />
        </div>
      </div>
    </ProtectedRoute>
  );
} 