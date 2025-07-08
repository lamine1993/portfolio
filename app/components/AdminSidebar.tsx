'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { users, roles } from '../data/users';

const objets = [
  { key: 'articles', label: 'Articles', formPath: '/admin/article-form' },
  { key: 'clients', label: 'Clients', formPath: '/admin/client-form' },
  { key: 'competences', label: 'Compétences', formPath: '/admin/competence-form' },
  { key: 'projets', label: 'Projets', formPath: '/admin/projet-form' },
  { key: 'experiences', label: 'Expériences', formPath: '/admin/experience-form' },
  { key: 'utilisateurs', label: 'Utilisateurs', formPath: '/admin/user-form' },
];

// Données fictives pour la démonstration
const data = {
  articles: [
    { id: 1, titre: 'React', categorie: 'Développement', date: '2024-03-15' },
    { id: 2, titre: 'TypeScript', categorie: 'Tutoriel', date: '2024-03-10' },
  ],
  clients: [
    { id: 1, nom: 'ACSA', description: 'Agence de Conseil' },
    { id: 2, nom: 'Wallu', description: 'Plateforme agricole' },
  ],
  competences: [
    { id: 1, nom: 'React', niveau: 90 },
    { id: 2, nom: 'Node.js', niveau: 85 },
  ],
  projets: [
    { id: 1, titre: 'Projet Acsa', techno: 'Ionic' },
    { id: 2, titre: 'Projet Wallu', techno: 'Ionic' },
  ],
  experiences: [
    { id: 1, titre: 'Consultant ServiceNow', societe: 'Yawize' },
    { id: 2, titre: 'Développeur Freelance', societe: 'Freelance' },
  ],
  utilisateurs: users.map(user => ({
    id: user.id,
    nom: `${user.firstName} ${user.lastName}`,
    email: user.email,
    role: user.role === 'admin' ? 'Administrateur' : 'Utilisateur',
    dateCreation: user.createdAt
  }))
};

export default function AdminSidebar() {
  const [selected, setSelected] = useState('articles');
  const router = useRouter();

  const handleRowClick = (id: number) => {
    const currentObj = objets.find(obj => obj.key === selected);
    if (currentObj) {
      router.push(`${currentObj.formPath}?edit=${id}`);
    }
  };

  const renderTable = () => {
    const rows = data[selected as keyof typeof data];
    if (!rows) return null;
    const headers = Object.keys(rows[0] || {});
    return (
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h.charAt(0).toUpperCase() + h.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any) => (
            <tr 
              key={row.id} 
              onClick={() => handleRowClick(row.id)}
              style={{ cursor: 'pointer' }}
              className="hover-row"
            >
              {headers.map((h) => (
                <td key={h}>{row[h]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderControls = () => {
    const currentObj = objets.find(obj => obj.key === selected);
    
    return (
      <div className="controls-section mb-3 p-3 bg-light border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2">
            {currentObj && (
              <Link href={currentObj.formPath} className="btn btn-success btn-sm">
                <i className="fas fa-plus me-1"></i>
                Nouveau
              </Link>
            )}
            
            <button className="btn btn-warning btn-sm">
              <i className="fas fa-edit me-1"></i>
              Modifier
            </button>
            <button className="btn btn-danger btn-sm">
              <i className="fas fa-trash me-1"></i>
              Supprimer
            </button>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm">
              <i className="fas fa-download me-1"></i>
              Exporter
            </button>
            <button className="btn btn-outline-info btn-sm">
              <i className="fas fa-filter me-1"></i>
              Filtrer
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex" style={{ minHeight: '400px' }}>
      <aside className="bg-dark text-white p-3" style={{ minWidth: 220 }}>
        <h4 className="mb-4">Objets</h4>
        <ul className="nav flex-column">
          {objets.map((obj) => (
            <li className="nav-item mb-2" key={obj.key}>
              <button
                className={`btn btn-sm w-100 text-start ${selected === obj.key ? 'btn-primary' : 'btn-outline-light'}`}
                onClick={() => setSelected(obj.key)}
              >
                {obj.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-fill p-4 bg-light">
        <h5>Liste des {objets.find(o => o.key === selected)?.label}</h5>
        {renderControls()}
        {renderTable()}
      </main>
    </div>
  );
} 