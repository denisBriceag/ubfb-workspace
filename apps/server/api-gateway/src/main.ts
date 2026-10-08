import { StandardSchemaValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import helmet from 'helmet';

import { AppModule } from './app/app.module';
import type { Env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService<Env, true>>(ConfigService);

  app.setGlobalPrefix('api');

  app.use(
    helmet({
      contentSecurityPolicy:
        config.getOrThrow('NODE_ENV', { infer: true }) === 'production',
    }),
  );

  app.useGlobalPipes(new StandardSchemaValidationPipe());

  app.enableCors({
    origin: config.getOrThrow('FE_ADMIN_URL', { infer: true }),
    methods: config.getOrThrow('CORS_METHODS', { infer: true }),
    credentials: true,
  });

  app.enableShutdownHooks();

  await app.listen(config.getOrThrow('PORT', { infer: true }));
}

void bootstrap();
