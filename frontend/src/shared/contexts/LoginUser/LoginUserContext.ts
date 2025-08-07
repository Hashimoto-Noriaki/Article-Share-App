import { createContext } from 'react';

export const LoginUserContext = createContext<LoginUserContextType | undefined>(
  undefined,
);
