// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Bỏ dotenv.config() đi, ConfigModule sẽ tự load
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

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
            database: configService.get<string>(
              'DB_SQLITE_PATH',
              'data.sqlite',
            ),
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            logging: true,
          };
        }

        // DÙNG configService, KHÔNG dùng process.env
        return {
          type: 'mysql',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT', 3306), // có default
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true, // dev only
          logging: true,
        } as TypeOrmModuleOptions;
      },
      inject: [ConfigService],
    }),

    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
