import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.string().default('3002'),
  USERS_GRPC_URL: z.string().default('0.0.0.0:50052'),
});

export type Env = z.infer<typeof envSchema>;
