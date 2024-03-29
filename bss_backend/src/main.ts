import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


//add global route for api as "api"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("bss/api/v1")

  const config = new DocumentBuilder()
    .setTitle("Businesses Server Solutions")
    .setDescription("Description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);


  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
