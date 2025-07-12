import { LoginInfoType, LoginReturnType } from '../types/login';

export const login = (info: LoginInfoType): LoginReturnType => {
    const { email,password } = info;
    if(email === 'test@example.com' && password === 'password123') {
        return {
            id: 1,
            name: 'テストユーザー',
            email: 'password123'
        };
    } else {
        throw new Error();
    }
}
