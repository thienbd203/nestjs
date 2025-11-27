import 'dotenv/config'; // Load .env file cho TypeORM CLI
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';

// Simple SQLite DataSource cho migration testing
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'data.sqlite',
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Use proper migrations
});
