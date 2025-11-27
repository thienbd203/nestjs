# NestJS cho Laravel Developers 🚀

## Mapping Concepts

| Laravel                  | NestJS                     | Ví dụ trong project              |
| ------------------------ | -------------------------- | -------------------------------- |
| **Model**                | **Entity**                 | `User` entity (`user.entity.ts`) |
| **Controller**           | **Controller**             | `UsersController`                |
| **Service**              | **Service**                | `UsersService`                   |
| **Service Provider**     | **Module**                 | `UsersModule`                    |
| **Form Request**         | **DTO + ValidationPipe**   | `CreateUserDto`, `UpdateUserDto` |
| **Middleware**           | **Guard/Interceptor**      | (sẽ học sau)                     |
| **Eloquent**             | **TypeORM/Prisma**         | TypeORM Repository pattern       |
| **Migration**            | **Migration**              | TypeORM migrations               |
| **$hidden**              | **select: false**          | password field                   |
| **Route::apiResource()** | **@Controller decorators** | @Get, @Post, @Patch, @Delete     |

## API Endpoints đã tạo

```bash
# Tạo user mới
POST /users
{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "password123"
}

# Lấy tất cả users
GET /users

# Lấy user theo ID
GET /users/1

# Cập nhật user
PATCH /users/1
{
  "name": "Jane Doe"
}

# Xóa user
DELETE /users/1
```

## Key Differences

### 1. Dependency Injection

- **Laravel**: `app()->make()` hoặc constructor injection
- **NestJS**: Constructor injection bắt buộc với decorators

### 2. Validation

- **Laravel**: Form Request class với `validate()` method
- **NestJS**: DTO với decorators + ValidationPipe

### 3. Database

- **Laravel**: Eloquent ORM (Active Record pattern)
- **NestJS**: TypeORM (Repository pattern) hoặc Prisma

### 4. Routing

- **Laravel**: `routes/api.php` file
- **NestJS**: Decorators trong controller

## Commands hữu ích

```bash
# Start development server
npm run start:dev

# Build cho production
npm run build

# Run tests
npm run test

# Tạo module mới
nest g module users
nest g controller users
nest g service users
```

## Next Steps

1. **Authentication**: JWT + Guards
2. **Database Relations**: One-to-many, Many-to-many
3. **Error Handling**: Global exception filters
4. **File Uploads**: Multer integration
5. **Testing**: Unit & Integration tests
