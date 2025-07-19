import { createContext, useState, ReactNode } from "react";
import { LoginUserType } from "../../../types/login";

export type LoginUserContextType = {
    loginUser: LoginUserType
    setLoginUser: (user: LoginUserType) => void;
};

export const LoginUserContext = createContext<LoginUserContextType | undefined>(undefined);

export const LoginUserProvider = ({ children }: { children: ReactNode }) => {
    const [loginUser, setLoginUser] = useState<LoginUserType>({
        id: 0,
        name: "",
    });

    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </LoginUserContext.Provider>
    );
};
