import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(3000),
    NODE_ENV: Joi.string().valid('development', 'production', 'test', 'staging').default('development'),
    PREFIX_API: Joi.string().default('api'),
}).unknown(true);

const { error, value: validatedEnv } = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`App Config validation error: ${error.message}`);
}

export default registerAs('app', () => ({
    port: validatedEnv.PORT,
    node_env: validatedEnv.NODE_ENV,
    prefix_api : validatedEnv.PREFIX_API
}));
