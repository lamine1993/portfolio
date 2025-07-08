export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  firstName: string;
  lastName: string;
  createdAt: string;
  lastLogin?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
} 