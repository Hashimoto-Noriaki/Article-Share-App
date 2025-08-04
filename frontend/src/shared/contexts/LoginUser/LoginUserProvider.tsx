import { useState, ReactNode } from 'react';
import { LoginUserContext } from './LoginUserContext';

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
