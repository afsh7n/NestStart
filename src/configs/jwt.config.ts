import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || 'default_secret', // کلید رمزنگاری JWT
  expiresIn: process.env.JWT_EXPIRES_IN || '1h', // مدت زمان انقضا
}));
