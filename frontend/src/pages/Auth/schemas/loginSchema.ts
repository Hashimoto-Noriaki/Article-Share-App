import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty('メールアドレスは必須です')
    .email('有効なメールアドレスを入力してください'),
  password: z
    .string()
    .nonempty('パスワードは必須です')
    .min(8, 'パスワードは8文字以上で入力してください'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
