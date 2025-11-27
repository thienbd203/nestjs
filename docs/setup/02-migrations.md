# 🗄️ TypeORM Migrations (tương tự Laravel Migrations)

## 📋 Laravel vs NestJS Migrations

| Laravel                        | NestJS (TypeORM)           | Command                                |
| ------------------------------ | -------------------------- | -------------------------------------- |
| `php artisan make:migration`   | Manual create file         | `src/migrations/xxx-migration-name.ts` |
| `php artisan migrate`          | `npm run migration:run`    | Run pending migrations                 |
| `php artisan migrate:rollback` | `npm run migration:revert` | Rollback last migration                |
| `php artisan migrate:fresh`    | Drop database + run        | Manual process                         |

## 🚀 Migration Commands

### **Run Migrations (tạo bảng)**

```bash
npm run migration:run
```

### **Rollback Migration**

```bash
npm run migration:revert
```

### **Generate New Migration**

```bash
npm run migration:generate -- src/migrations/002-create-posts-table
```

## 📁 Migration File Structure

```typescript
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1640000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create table logic (tương tự Laravel up())
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop table logic (tương tự Laravel down())
  }
}
```

## 🎯 Best Practices

### ✅ **Production Safe**

- Disable `synchronize: true` trong production
- Use migrations để track schema changes
- Version control migration files

### ✅ **Naming Convention**

- `001-create-users-table.ts`
- `002-add-user-avatar-column.ts`
- `003-create-posts-table.ts`

### ✅ **Database Switching**

- **Development**: SQLite với `synchronize: true`
- **Production**: MySQL với migrations

## ⚙️ Configuration

### **app.module.ts**

```typescript
// Development - auto sync
synchronize: configService.get('NODE_ENV') === 'development';

// Production - use migrations
synchronize: false;
```

### **data-source.ts**

```typescript
export const AppDataSource = new DataSource({
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Use proper migrations
});
```

## 🔧 Testing Migrations

### **1. Create Database**

```sql
CREATE DATABASE nestjs_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### **2. Configure .env**

```env
DB_TYPE=mysql
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=nestjs_db
```

### **3. Run Migration**

```bash
npm run migration:run
```

### **4. Verify Table**

```sql
USE nestjs_db;
DESCRIBE users;
SHOW TABLES;
```

## 📝 Migration Examples

### **Create Table**

```typescript
await queryRunner.createTable(
  new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      // ... other columns
    ],
  }),
  true,
);
```

### **Add Column**

```typescript
await queryRunner.addColumn(
  'users',
  new TableColumn({
    name: 'avatar',
    type: 'varchar',
    length: '255',
    isNullable: true,
  }),
);
```

### **Add Index**

```typescript
await queryRunner.createIndex(
  'users',
  new TableIndex({
    name: 'IDX_USERS_EMAIL',
    columnNames: ['email'],
    isUnique: true,
  }),
);
```

## 🚨 Important Notes

- **Always backup** before running migrations in production
- **Test migrations** in development first
- **Use transactions** for complex migrations
- **Document breaking changes** in migration descriptions
