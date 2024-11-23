# 🚀 NestJS Modular Project Starter (Enhanced with Docker, Swagger, and Configurations)

Welcome to the **NestJS Modular Project Starter**! 🎉 This boilerplate is designed to kickstart your **NestJS** applications with a highly modular architecture, **Docker** support, **Profile-based configuration**, and **Swagger documentation**. It's perfect for developers aiming to build enterprise-grade, scalable, and maintainable applications.

---

## 📂 Project Structure

Here’s an overview of the full project structure:

```plaintext
project-root/
├── docker/                  
│   ├── nginx/               # Nginx configuration and Dockerfile
│   ├── mysql/               # MySQL configuration and Dockerfile
│   ├── postgres/            # PostgreSQL configuration and Dockerfile
│   └── app/                 # Application-specific Dockerfile
├── src/                     
│   ├── modules/             # All feature modules
│   │   ├── user/            # Example: User module
│   │   │   ├── controllers/ # Handles HTTP requests
│   │   │   ├── services/    # Business logic
│   │   │   ├── repositories/# Database interactions
│   │   │   ├── entities/    # Database models
│   │   │   ├── dtos/        # Data Transfer Objects
│   │   │   ├── interfaces/  # TypeScript interfaces
│   │   │   └── user.module.ts # Main module file
│   │   └── auth/            # Example: Authentication module
│   │       ├── controllers/ # Auth-related routes
│   │       ├── services/    # Authentication logic
│   │       ├── strategies/  # Auth strategies (e.g., JWT)
│   │       ├── guards/      # Route protection
│   │       └── auth.module.ts
│   ├── common/              # Shared utilities and functionalities
│   │   ├── decorators/      # Custom decorators
│   │   ├── filters/         # Exception filters
│   │   ├── pipes/           # Validation pipes
│   │   ├── enums/           # Shared enums (e.g., status codes, Swagger settings)
│   │   └── utils/           # Helper functions
│   ├── configs/             # Configuration files
│   │   ├── database.config.ts # Database configurations
│   │   ├── app.config.ts    # General app configurations
│   │   ├── swagger.config.ts # Swagger-specific configurations
│   │   └── jwt.config.ts    # JWT configurations
│   ├── core/                # Core functionalities
│   │   ├── database/        # Database module
│   │   ├── logger/          # Logging system
│   │   ├── swagger/         # Swagger setup
│   │   └── core.module.ts   # Core module
│   └── main.ts              # Entry point of the application
├── docker-compose.mysql.yml # Docker Compose for MySQL
├── docker-compose.postgres.yml # Docker Compose for PostgreSQL
├── .env                     # Environment variables
├── .dockerignore            # Docker ignore rules
├── .gitignore               # Git ignore rules
├── package.json             # Project dependencies and scripts
```

---

## ✨ Features

- **Dockerized Development**: Pre-configured with Docker and Docker Compose for easy setup and deployment.
- **Multiple Databases**: Switch between **MySQL** and **PostgreSQL** seamlessly using environment variables.
- **Swagger Integration**: Auto-generated API documentation with built-in support for bearer authentication.
- **Environment-based Configuration**: Centralized configuration management for different environments (development, production, staging).
- **Reusable Components**: Shared decorators, filters, pipes, and utilities for a streamlined codebase.
- **Authentication Ready**: JWT-based authentication module with guards and strategies.
- **Modular Design**: Clean separation of concerns with fully encapsulated modules.
- **Nginx Integration**: Acts as a reverse proxy, ready for SSL, caching, and load balancing.

---

## 🛠️ Setup and Run the Project

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/afsh7n/nestStart.git
cd nestStart
```

---

### **2️⃣ Install Dependencies**
If you plan to run the project locally:
```bash
npm install
```

---

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the project root. Here’s a sample configuration:

```plaintext
# ========================
# General Configuration
# ========================
PORT=3000                   # Application port
NODE_ENV=development        # Environment: development, production, or staging
PREFIX_API=api

# ========================
# Database Configuration
# ========================
DB_TYPE=postgres            # Database type: mysql or postgres
DB_HOST=postgres            # Database host (service name in Docker)
DB_PORT=5432                # Database port
DB_USERNAME=admin           # Database username
DB_PASSWORD=password        # Database password
DB_NAME=my_database         # Database name

# ========================
# Swagger Configuration
# ========================
SWAGGER_TITLE=My Awesome API       # Title of the Swagger documentation
SWAGGER_DESCRIPTION=API Documentation for My Awesome API # Description of the API
SWAGGER_VERSION=1.0                # API version for Swagger
SWAGGER_PATH=api/docs              # URL path for Swagger UI
SWAGGER_BEARER_AUTH=true           # Enable bearer authentication in Swagger

# ========================
# JWT Configuration
# ========================
JWT_SECRET=my_super_secret_key
JWT_EXPIRES_IN=1h
```

---

### **4️⃣ Run with Docker**

#### **For MySQL:**
```bash
docker-compose -f docker-compose.mysql.yml up --build
```

#### **For PostgreSQL:**
```bash
docker-compose -f docker-compose.postgres.yml up --build
```

---

### **5️⃣ Access the Application**

- **Swagger UI**: [http://localhost/api/docs](http://localhost/api/docs)
- **App Direct Access**: [http://localhost:3000](http://localhost:3000)

---

### **6️⃣ Run Locally (Without Docker)**
1. Set up a local database (e.g., MySQL or PostgreSQL) and update `.env` accordingly.
2. Run the app:
   ```bash
   npm run start:dev
   ```

---

## 🔗 API Endpoints

### **User Module**
- **GET /users**: Get the list of users (protected route; requires login).
- **POST /users**: Add a new user (for testing purposes).

### **Auth Module**
- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login with username and password to obtain a JWT.

---

## 📋 Contributing

We welcome contributions! Feel free to:
- Submit pull requests 🚀
- Report bugs 🐞
- Suggest new features ✨

---

## 🐳 Docker Overview

- **Nginx**: Acts as a reverse proxy for the application.
- **App Service**: Runs the NestJS application inside a Node.js container.
- **MySQL/PostgreSQL**: Database services are dynamically set up using `.env`.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute.

---

## 🤩 Final Thoughts

Thank you for using this starter template! If you find it useful, please ⭐ the repository and share it with others.  
Happy coding! 💻✨