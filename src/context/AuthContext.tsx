import React, { createContext, useState } from 'react';

import { api } from '../services/api';

/**
 * Basic User interface
 */
export interface IUser {
  id: number;
  name: string;
  email: string;
  token: string;
  isAdmin: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}

/**
 * User Context
 */
export interface AuthContextData {
  login(credentials: ILogin): Promise<IUser>;
}

interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children
}: AuthProviderProps) => {
  const login = async (credentials: ILogin): Promise<IUser> => {
    const response = await api.post<IUser>('auth/login', credentials);
    return response.data;
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};
