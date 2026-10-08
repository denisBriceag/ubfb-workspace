import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3000),
  FE_ADMIN_URL: z.url().default('http://localhost:4200'),
  CORS_METHODS: z
    .string()
    .default('')
    .transform((v) => v.split(',').filter(Boolean)),
});

export type Env = z.infer<typeof envSchema>;
