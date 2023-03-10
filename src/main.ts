import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.APP_PORT || 5000;

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}
bootstrap();
