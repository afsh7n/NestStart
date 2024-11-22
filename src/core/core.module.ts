import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { setupSwagger } from './swagger/swagger.setup';

@Module({
  imports: [
    ConfigModule, // وارد کردن ماژول تنظیمات
  ],
})
export class CoreModule {
  static configureSwagger(app: any): void {
    setupSwagger(app); // تنظیم Swagger با استفاده از تابع setupSwagger
  }
}
