import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Load environment variables (tương tự Laravel .env)
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // TypeORM với dynamic config từ .env
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const dbType = configService.get<'mysql' | 'sqlite'>(
          'DB_TYPE',
          'sqlite',
        );

        if (dbType === 'sqlite') {
          return {
            type: 'sqlite',
            database: 'data.sqlite',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true, // ✅ NestJS docs standard cho development
          } as TypeOrmModuleOptions;
        }

        return {
          type: 'mysql' as const,
          host: configService.get('DB_HOST', 'localhost'),
          port: configService.get<number>('DB_PORT', 3306),
          username: configService.get('DB_USERNAME', 'root'),
          password: configService.get('DB_PASSWORD', ''),
          database: configService.get('DB_DATABASE', 'nestjs_db'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true, // ✅ NestJS docs standard cho development
        } as TypeOrmModuleOptions;
      },
      inject: [ConfigService],
    }),

    UsersModule,

    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
