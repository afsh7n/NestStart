import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export function setupSwagger(app: INestApplication): void {
  const configService = app.get(ConfigService);
  const swaggerConfig = configService.get('swagger');

  const config = new DocumentBuilder()
    .setTitle(swaggerConfig.title)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version);

  if (swaggerConfig.bearerAuth) {
    config.addBearerAuth(); // add auth
  }

  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup(swaggerConfig.docsPath, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
}
