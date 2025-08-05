import { LoginFormValues } from '../pages/Auth/schemas/loginSchema';

export const login = async (info: LoginFormValues) => {
  const { email, password } = info;
  if (email === 'test@example.com' && password === 'password123') {
    return {
      id: 1,
      name: 'テストユーザー',
      email: 'test@example.com',
    };
  } else {
    throw new Error('');
  }
};
