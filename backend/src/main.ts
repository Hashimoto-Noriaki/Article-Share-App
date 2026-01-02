import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS を許可（React、React NativeからAPI叩けるように）
  app.enableCors({
    origin: '*',
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
