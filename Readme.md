# 🚀 Dockerized Express API

A simple Express.js API application containerized with Docker for easy deployment and testing.

---

## 📁 Project Structure

```
.
├── Dockerfile
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧱 Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Docker](https://www.docker.com/)

---

## 🐳 Dockerfile Overview

```dockerfile
# Base Image
FROM node:20-alpine3.18

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Start the application
CMD ["npm", "start"]
```

---

## 🚦 Available Endpoints

| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| GET    | `/`         | Welcome message             |
| GET    | `/products` | Returns product list (JSON) |

---

## ⚙️ Scripts

```bash
# Start the app
npm start

# Optional: Run using nodemon (if installed)
npx nodemon index.js
```

---

## 🐳 Docker Commands

### 📆 Build Image

```bash
docker build -t expressapp .
```

### 🚀 Run Container (Fixed Port)

```bash
docker run -it -p 8000:3000 expressapp
```

### 🌀 Run in Background (Detached)

```bash
docker run -itd -p 8000:3000 expressapp
```

### 🔄 Automatic Port Mapping

```bash
docker run -it -P expressapp
```

### 🚩 Cleanup on Exit

```bash
docker run -it --rm -p 8000:3000 expressapp
```

### 🛠 Multiple Port Mapping (for testing)

```bash
docker run -it -p 8000:3000 -p 3001:3000 expressapp
```

---

## 📋 Useful Docker Commands

```bash
docker ps               # List running containers
docker ps -a            # List all containers
docker images           # List downloaded images
docker rm <id>          # Remove stopped container
docker rmi <image>      # Remove image
```

---

## 🥪 Sample Output

\*\*GET \*\***`/products`**

```json
[
  { "id": 1, "name": "Product A", "price": 100 },
  { "id": 2, "name": "Product B", "price": 150 },
  { "id": 3, "name": "Product C", "price": 200 }
]
```

---

## 📝 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC)

---

## 👨‍💼 Author

Made with ❤️ by \[Saurabh Singh]
