import { User } from '../types/auth';

export const users: User[] = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@portfolio.com',
    password: 'admin123', // En production, utiliser des mots de passe hashés
    role: 'admin',
    firstName: 'Administrateur',
    lastName: 'Principal',
    createdAt: '2024-01-01',
    lastLogin: '2024-03-20'
  },
  {
    id: 2,
    username: 'manager',
    email: 'manager@portfolio.com',
    password: 'manager123',
    role: 'admin',
    firstName: 'Gestionnaire',
    lastName: 'Contenu',
    createdAt: '2024-02-01',
    lastLogin: '2024-03-19'
  },
  {
    id: 3,
    username: 'user',
    email: 'user@portfolio.com',
    password: 'user123',
    role: 'user',
    firstName: 'Utilisateur',
    lastName: 'Standard',
    createdAt: '2024-03-01',
    lastLogin: '2024-03-18'
  }
];

export const roles = [
  { key: 'user', label: 'Utilisateur' },
  { key: 'admin', label: 'Administrateur' }
]; 