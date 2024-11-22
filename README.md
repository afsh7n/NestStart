# 🚀 NestJS Modular Project Starter (Updated with Docker and Setup Guide)

Welcome to the **NestJS Modular Project Starter**! 🎉 This boilerplate is enhanced with **Docker**, **Docker Compose**, and **Profile-based configuration** for maximum flexibility and scalability. With a clean folder structure, this project is perfect for building enterprise-grade applications.

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
│   │       ├── strategies/  # Auth strategies (e.g., JWT)
│   │       ├── guards/      # Route protection
│   │       └── auth.module.ts
│   ├── common/              # Shared utilities and functionalities
│   │   ├── decorators/      # Custom decorators
│   │   ├── filters/         # Exception filters
│   │   ├── pipes/           # Validation pipes
│   │   └── utils/           # Helper functions
│   ├── configs/             # Configuration files
│   │   ├── database.config.ts # Database configurations
│   │   └── app.config.ts    # General app configurations
│   ├── core/                # Core functionalities
│   │   ├── database/        # Database module
│   │   ├── logger/          # Logging system
│   │   └── core.module.ts   # Core module
│   └── main.ts              # Entry point of the application
├── docker-compose.yml       # Docker Compose configuration
├── .env                     # Environment variables
```

---

## ✨ Features

- **Docker & Profiles**: Use Docker Compose profiles to toggle between **MySQL** and **PostgreSQL** with a single command.
- **Modular Design**: Each feature is encapsulated in its module, making the app highly scalable and maintainable.
- **Reusable Components**: Shared decorators, pipes, filters, and utilities for streamlined development.
- **Environment-based Configuration**: Easily switch between development, staging, and production environments.
- **Extensible Core**: Add custom functionalities like logging and caching with ease.
- **Nginx Integration**: Ready for performance improvements, SSL, and load balancing.

---

## 🛠️ Setup and Run the Project

Follow these steps to set up and run the project:

---

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/afsh7n/nestStart.git
cd nestStart
```

---

### **2️⃣ Install Dependencies (Optional for Local Development)**
If you’re running the project locally (without Docker):
```bash
npm install
```

---

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the project root. Here's an example:

```plaintext
# ========================
# General Configuration
# ========================
PORT=3000                # Application port
NODE_ENV=development      # Environment: development, production, or staging

# ========================
# Database Configuration
# ========================
DB_TYPE=postgres             # Database type: mysql or postgres
DB_HOST=postgres             # Database host (service name in Docker)
DB_PORT=5432              # Database port
DB_USERNAME=admin         # Database username
DB_PASSWORD=password      # Database password
DB_NAME=my_database       # Database name

# ========================
# Swagger Configuration
# ========================
SWAGGER_TITLE=My Awesome API      # Title of the Swagger documentation
SWAGGER_DESCRIPTION=Detailed API documentation for My Awesome API  # Description of the API
SWAGGER_VERSION=2.0               # API version for Swagger
SWAGGER_PATH=api/docs             # URL path for Swagger UI
SWAGGER_BEARER_AUTH=true          # Enable bearer authentication in Swagger

```

---

### **4️⃣ Run the Project with Docker**
The project is pre-configured to use Docker Compose for running the app along with the database.

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
- The app will be available at:
   - App (direct): [http://localhost:3000](http://localhost:3000)
   - Via Nginx: [http://localhost](http://localhost)

- You can test database connections using tools like `pgAdmin` (PostgreSQL) or `MySQL Workbench`.

---

### **6️⃣ Run Locally (Optional)**
If you’re not using Docker and want to run the app locally:
1. Install a database (e.g., MySQL or PostgreSQL) and configure `.env` accordingly.
2. Run the app in development mode:
   ```bash
   npm run start:dev
   ```
3. For production:
   ```bash
   npm run build
   npm run start:prod
   ```

---

## 🎯 Usage

### 🛠 Adding a New Module
1. Create a folder under `src/modules/`:
   ```plaintext
   src/modules/new-module/
   ```
2. Add `controllers/`, `services/`, `entities/`, etc., as needed.
3. Register the module in `app.module.ts`:
   ```typescript
   import { NewModule } from './modules/new-module/new.module';
   @Module({
     imports: [NewModule],
   })
   export class AppModule {}
   ```

---

## 🐳 Docker Overview

- **Nginx**: Serves as a reverse proxy for the app and is ready for SSL integration.
- **App Service**: Runs the NestJS application inside a Node.js container.
- **MySQL**: Configured with a custom Dockerfile and `my.cnf` for database needs.
- **PostgreSQL**: Includes an `init.sql` file to set up the database dynamically using environment variables.

---

## 🧑‍💻 Contributing

We welcome contributions from the community! 🤝  
Feel free to:
- Submit a pull request 🚀
- Report issues 🐞
- Share feedback 💬

---

## 📋 To-Do List

- [ ] Add unit and integration tests 🧪
- [ ] Configure CI/CD pipelines ⚙️
- [ ] Add support for GraphQL 🌐
- [ ] Extend the logger for analytics 📊
- [ ] Set up Nginx for SSL and caching optimization 🔒

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to use and modify it as needed!

---

## 🤩 Final Thoughts

With this setup guide, you can run the project both locally and via Docker with ease. If you like this project, please give it a ⭐ on [GitHub](https://github.com/your-repo).  
Happy coding! 💻✨

---

### 🎉 Let's Build Something Amazing Together!

![Happy Coding GIF](https://media.giphy.com/media/xT0xeMA62E1XIlup68/giphy.gif)

---

This updated README now includes a clear setup guide for both local development and Docker-based workflows, making it simple for new developers to get started! 🚀