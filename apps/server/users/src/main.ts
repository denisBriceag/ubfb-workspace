import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { UsersModule } from './app/users.module';
import type { Env } from './env';
import type { AsyncMicroserviceOptions} from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { join } from 'node:path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<AsyncMicroserviceOptions>(
    UsersModule,
    {
      inject: [ConfigService],
      useFactory: (config: ConfigService<Env, true>) => ({
        transport: Transport.GRPC,
        options: {
          package: 'users',
          protoPath: join(process.cwd(), 'proto', 'users.proto'),
          url: config.getOrThrow('USERS_GRPC_URL', { infer: true }),
        },
      }),
    },
  );

  app.enableShutdownHooks();

  await app.listen();
}

void bootstrap();
