```markdown
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

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Docker](https://www.docker.com/)

---

## 🐳 Dockerfile Overview

```
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

| Method | Endpoint     | Description                 |
| ------ | ------------ | ---------------------------|
| GET    | `/`          | Welcome message             |
| GET    | `/products`  | Returns product list (JSON) |

---

## ⚙️ Scripts

```
# Start the app
npm start

# Optional: Run using nodemon (if installed)
npx nodemon index.js
```

---

# 🐳 Docker Master Cheat Sheet

## 🔹 Basic Docker Commands

```
docker --version               # Show Docker version installed
docker info                    # Display Docker system info
```

## 🔹 Working with Images

```
docker pull              # Download image from Docker Hub
docker images                        # List all downloaded images
docker image rm               # Remove a specific image
docker image rm alpine ubuntu        # Remove multiple images
docker image rm --help               # Help for image removal
docker save -o image.tar        # Save image to tar file
docker load -i image.tar             # Load image from tar file
```

## 🔹 Working with Containers

```
docker run                          # Run a container
docker run -it                      # Interactive terminal session
docker run -d                       # Run container in background
docker run --name mycontainer       # Name the container
docker start                      # Start an existing container
docker stop                       # Stop a container
docker restart                    # Restart a container
docker pause                      # Pause/unpause a container
docker unpause 
docker ps                                  # List running containers
docker ps -a                               # List all containers (incl. stopped)
docker container ls                        # Same as docker ps
docker container ls -a                     # All containers
docker rm                         # Remove a stopped container
docker rm -f                           # Force remove a container
```

## 🔹 Help Commands and Common Mistakes

```
docker container --help    # Help for container commands
docker image --help        # Help for image commands
```
- **Typo Alert:** 'doxker'/ 'dokcer', 'exir'
- **Wrong:** `docker images rm ubuntu` ❌ | **Correct:** `docker image rm ubuntu` ✅

## 🔹 Exit Container

```
exit   # Exit from inside a container
```

---

## 📝 Dockerfile Notes

- **Build Image:**  
  `docker build -t expressapp .`
- **Host Machine Port Mapping:**  
  `docker run -it -p 8000:3000 expressapp`
- **Multiple Port Mapping:**  
  `docker run -it -p 8000:3000 -p 3001:3000 expressapp`
- **Automated Port Mapping (Expose):**  
  `docker run -it -P expressapp`
- **Detached Terminal:**  
  `docker run -itd -P expressapp`

---

## 🐳 Docker Hub Commands

```
docker build -t saurabhsingh454/express-app .
docker login    # or docker logout
docker push saurabhsingh454/express-app
docker pull saurabhsingh454/express-app:latest
```

---

## 🧩 Multistage Build (Dockerfile Pattern)

- Use multiple `FROM` instructions to separate build dependencies from production.
- Minimizes image size and enhances security.

```
FROM node:20-alpine as builder
# build steps

FROM node:20-alpine
# copy only dist & production dependencies
```

---

## 🔗 Docker Networking

- **List, Inspect, Create Networks:**
    ```
    docker network ls
    docker network inspect bridge
    docker network create saurabhnet
    ```
- **Attach Containers to Network:**
    ```
    docker run -itd --network=saurabhnet --rm --name=alpine_container alpine
    docker exec alpine_container ping alpine_container_2
    ```
- **Connect/Disconnect between Networks:**
    ```
    docker network connect saurabhnet busybox_container
    docker network disconnect saurabhnet busybox_container
    ```

---

## 💾 Docker Volumes

- **Preferred for persistent container data.**

```
docker volume create my_data
docker volume ls
docker run -it --rm -v my_data:/home ubuntu
```
- Files created in `/home` inside container persist on volume.

---

## 🛠 Docker Compose

- **`docker-compose.yml` Example:**

    ```
    services:
      service_name:
        image: image_name
        container_name: custom_name
        ports:
          - "host:container"
        volumes:
          - ./host_path:/container_path
        environment:
          - VAR_NAME=value
        networks:
          - network_name
    volumes:
      volume_name:
    networks:
      network_name:
        driver: bridge
    ```

- **Compose Commands:**
    ```
    docker compose up                # Create & start containers
    docker compose up -d             # Detached
    docker compose down              # Stop and remove
    docker compose ps                # List running
    docker compose logs              # Show logs
    docker compose build             # Build/rebuild images
    docker compose stop/start        # Stop/start services
    ```

---

## 🥪 Sample API Output

**GET** `/products`

```
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

Made with ❤️ by Saurabh Singh

---

**Happy Dockerizing!**  
Keep this as your reference—add more notes, improve examples, and level up your knowledge!
```