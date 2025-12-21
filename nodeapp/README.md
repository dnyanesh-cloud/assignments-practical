# 🐳 Docker Notes & Reference Guide

A complete, structured, and beginner-to-advanced guide to **Docker**, covering core concepts, commands, architecture, networking, Docker Compose, Dockerfiles, volumes, security, and best practices.

This repository is intended for:
- 📘 Learning Docker from scratch
- 🧪 Hands-on practice
- 🎯 Interview preparation
- 🚀 Real-world project reference

---

## 📌 Table of Contents

1. Introduction to Docker  
2. Docker Installation & Verification  
3. Docker Images & Containers  
4. Docker Image Layers  
5. Port Binding  
6. Environment Variables  
7. Troubleshooting & Debugging  
8. Docker Networking  
9. Docker vs Virtual Machines  
10. Developing Apps with Docker  
11. Docker Compose  
12. Dockerfile & App Dockerization  
13. Docker Hub & Image Publishing  
14. Docker Volumes & Persistence  
15. Backup & Restore  
16. Docker Architecture  
17. Image vs Container  
18. Advanced Docker Concepts  
19. Cleanup & Pruning  
20. Helper Flags & Cheatsheet

---

## 1️⃣ Introduction to Docker

Docker is a containerization platform that allows applications to be packaged with all dependencies and run consistently across different environments.

---

## 2️⃣ Installation & Verification

```bash
docker -v
```

---

## 3️⃣ Docker Images & Containers

```bash
docker pull <image-name>
docker run -d <image-name>
docker ps -a
docker stop <id>
docker rm <id>
```

---

## 4️⃣ Docker Image Layers

```
Container Layer (Read/Write)
---------------------------
Layer 2 (Read-only)
Layer 1 (Read-only)
Base Layer (Linux OS)
```

---

## 5️⃣ Port Binding

```bash
docker run -p HOST_PORT:CONTAINER_PORT <image>
```

---

## 6️⃣ Environment Variables

```bash
docker run -e MYSQL_ROOT_PASSWORD=secret mysql
```

---

## 7️⃣ Troubleshooting & Debugging

```bash
docker logs <id>
docker exec -it <id> /bin/bash
docker inspect <id>
```

---

## 8️⃣ Docker Networking

```bash
docker network ls
docker network create my-network
```

---

## 9️⃣ Docker vs VM

| Docker | VM |
|------|----|
| Lightweight | Heavy |
| Fast startup | Slow startup |

---

## 🔟 Docker Compose

```bash
docker compose up -d
docker compose down
```

---

## 1️⃣1️⃣ Dockerfile Example

```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]
```

---

## 1️⃣2️⃣ Docker Volumes

```bash
docker volume create myvol
docker run -v myvol:/data <image>
```

---

## 1️⃣3️⃣ Cleanup

```bash
docker system prune
```

---

## ✅ Final Notes

✔ Beginner-friendly  
✔ Interview-ready  
✔ Production concepts included  
