import { join } from 'node:path';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import type { AsyncMicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';

import { AuthModule } from './app/auth.module';
import type { Env } from './env';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<AsyncMicroserviceOptions>(
    AuthModule,
    {
      inject: [ConfigService],
      useFactory: (config: ConfigService<Env, true>) => ({
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(process.cwd(), 'proto', 'auth.proto'),
          url: config.getOrThrow('AUTH_GRPC_URL', { infer: true }),
        },
      }),
    },
  );

  app.enableShutdownHooks();

  await app.listen();
}

void bootstrap();
