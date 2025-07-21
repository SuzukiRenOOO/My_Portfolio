import { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'メールアドレスは必須です。' })
    .email({ message: 'Must be a valid email' }),
  message: z.string().min(1, { message: 'メッセージの入力が必要です。' }),
});

export type TFormSchema = z.infer<typeof formSchema>;
