import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface AuthData {
  token: string;
  user: object;
}

interface AuthSessionData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  handleLogin(credentials: AuthSessionData): void;
  handleLogout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@KnifeClub/token');
    const user = localStorage.getItem('@KnifeClub/user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const handleLogin = useCallback(
    async ({ email, password }: AuthSessionData) => {
      const {
        data: { token, user },
      } = await api.post('/sessions', {
        email,
        password,
      });

      localStorage.setItem('@KnifeClub/token', token.token);
      localStorage.setItem('@KnifeClub/user', JSON.stringify(user));

      setData({ token: token.token, user });
    },
    [],
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem('@KnifeClub/token');
    localStorage.removeItem('@KnifeClub/user');

    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
