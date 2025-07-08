import AdminSidebar from '../components/AdminSidebar';
import ProtectedRoute from '../components/ProtectedRoute';

export default function AdminPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <div className="admin-page">
        <div className="container py-5">
          <h1 className="mb-4">Administration</h1>
          <AdminSidebar />
        </div>
      </div>
    </ProtectedRoute>
  );
} 