import { createContext, useState, ReactNode } from 'react';

export const LoginUserContext = createContext<LoginUserContextType | undefined>(undefined);

export const LoginUserProvider = ({ children }: { children: ReactNode }) => {
  const [loginUser, setLoginUserState] = useState<LoginUser>(null);

  const setLoginUser = (user: LoginUser) => {
    setLoginUserState(user);
  };

  const logout = () => {
    setLoginUserState(null);
  };

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser, logout }}>
      {children}
    </LoginUserContext.Provider>
  );
};
