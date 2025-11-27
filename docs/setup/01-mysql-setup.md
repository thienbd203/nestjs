# MySQL Setup cho NestJS

## 🗄️ Database Configuration

### 1. **Tạo .env file**

```bash
cp .env.example .env
```

### 2. **Cấu hình MySQL trong .env**

```env
# Database Configuration (tương tự Laravel .env)
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
DB_DATABASE=nestjs_db
```

### 3. **Tạo database trong MySQL**

```sql
CREATE DATABASE nestjs_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 4. **Start ứng dụng**

```bash
npm run start:dev
```

## 🔄 **Switch giữa SQLite và MySQL**

**Dùng SQLite (cho learning/testing):**

```env
DB_TYPE=sqlite
```

**Dùng MySQL (cho production):**

```env
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=nestjs_db
```

## 📋 **Laravel vs NestJS Database Config**

| Laravel               | NestJS                  |
| --------------------- | ----------------------- |
| `.env` file           | `.env` file             |
| `DB_CONNECTION=mysql` | `DB_TYPE=mysql`         |
| `DB_HOST=127.0.0.1`   | `DB_HOST=localhost`     |
| `DB_PORT=3306`        | `DB_PORT=3306`          |
| `DB_DATABASE=laravel` | `DB_DATABASE=nestjs_db` |
| `DB_USERNAME=root`    | `DB_USERNAME=root`      |
| `DB_PASSWORD=`        | `DB_PASSWORD=`          |

## 🚀 **Testing Connection**

```bash
# Test API endpoints
curl http://localhost:3000/users
```
