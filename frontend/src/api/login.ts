import { LoginInfoType, LoginReturnType } from '../types/login';

export const login = async (info: LoginInfoType): Promise<LoginReturnType> => {
    const { email, password } = info;
        if (email === "test@example.com" && password === "password123") {
            return {
                id: 1,
                name: "テストユーザー",
                email:"test@example.com",
            };
        } else {
            throw new Error("メールアドレスかパスワードが間違っています");
    }
};
