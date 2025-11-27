# 📚 NestJS Documentation

## 📁 Documentation Structure

### 🎓 **Learning** (`docs/learning/`)

- **`01-nestjs-basics.md`** - NestJS fundamentals cho Laravel developers
- Mapping concepts giữa Laravel và NestJS
- Best practices và patterns

### ⚙️ **Setup** (`docs/setup/`)

- **`01-mysql-setup.md`** - MySQL configuration và environment setup
- Database switching (SQLite ↔ MySQL)
- Environment variables configuration

### 🚀 **API** (`docs/api/`)

- **`01-user-crud.http`** - User CRUD API testing endpoints
- REST Client examples cho VS Code
- API documentation và testing

## 🚀 Quick Start

1. **Setup Database:**

   ```bash
   cp .env.example .env
   # Configure MySQL credentials trong .env
   ```

2. **Start Development:**

   ```bash
   npm run start:dev
   ```

3. **Test API:**
   ```bash
   # Mở docs/api/01-user-crud.http trong VS Code
   # Sử dụng REST Client extension
   ```

## 📖 Learning Path

### Phase 1: **NestJS Basics** ✅

- [x] Project structure
- [x] Controllers, Services, Modules
- [x] CRUD operations với TypeORM
- [x] Validation với DTOs
- [x] Error handling

### Phase 2: **Database** ✅

- [x] MySQL configuration
- [x] Environment variables
- [x] Database switching

### Phase 3: **Authentication** 🔄

- [ ] JWT setup
- [ ] Authentication Guards
- [ ] Login/Logout endpoints
- [ ] Protected routes

### Phase 4: **Advanced Features** 📋

- [ ] File uploads
- [ ] Database migrations
- [ ] Testing
- [ ] Production deployment

## 🎯 Laravel → NestJS Mapping

| Laravel      | NestJS               | Documentation                       |
| ------------ | -------------------- | ----------------------------------- |
| Model        | Entity               | `docs/learning/01-nestjs-basics.md` |
| Controller   | Controller           | `docs/learning/01-nestjs-basics.md` |
| Service      | Service              | `docs/learning/01-nestjs-basics.md` |
| Migration    | TypeORM Migration    | Upcoming                            |
| Middleware   | Guard/Interceptor    | Upcoming                            |
| Form Request | DTO + ValidationPipe | `docs/learning/01-nestjs-basics.md` |

## 🔗 Useful Links

- [Official NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [VS Code REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
