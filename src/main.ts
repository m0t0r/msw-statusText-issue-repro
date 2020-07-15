import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function loadMockServiceWorker() {
  return import('./mocks/server');
}

async function bootstrap() {
  if (process.env.NODE_ENV === 'development') {
    const { server } = await loadMockServiceWorker();
    server.listen();
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
