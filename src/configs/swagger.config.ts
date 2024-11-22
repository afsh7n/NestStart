import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const envVarsSchema = Joi.object({
  SWAGGER_TITLE: Joi.string().default('NestJS Starter API'),
  SWAGGER_DESCRIPTION: Joi.string().default('API documentation for the NestJS Starter project'),
  SWAGGER_VERSION: Joi.string().default('1.0'),
  SWAGGER_PATH: Joi.string().default('api/docs'),
  SWAGGER_BEARER_AUTH: Joi.boolean().default(true), // فعال‌سازی احراز هویت
}).unknown(true);

const { error, value: validatedEnv } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Swagger Config validation error: ${error.message}`);
}

export default registerAs('swagger', () => ({
  title: validatedEnv.SWAGGER_TITLE,
  description: validatedEnv.SWAGGER_DESCRIPTION,
  version: validatedEnv.SWAGGER_VERSION,
  docsPath: validatedEnv.SWAGGER_PATH,
  bearerAuth: validatedEnv.SWAGGER_BEARER_AUTH,
}));
