# 🚀 MongoDB + Mongo Express + Node.js App (Dockerized)

![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Node.js](https://img.shields.io/badge/Node.js-Backend-success)
![Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen)

A **production-style DevOps project** demonstrating how to containerize **MongoDB**, **Mongo Express**, and connect them with a **Node.js application** using **Docker & Docker Compose**.

---

## 📌 Features

- MongoDB container with persistent storage
- Mongo Express web-based UI
- Secure environment variables
- Docker Compose orchestration
- Node.js API integration
- Clean & professional project structure

---

## 🏗 Architecture Overview

```text
Browser
   │
   ▼
Mongo Express (8081)
   │
   ▼
MongoDB (27017)
   │
   ▼
Node.js API (5050)
```

---

## 📁 Project Structure

```bash
node-app/
│── docker-compose.yml
│── README.md
│── screenshots/
│── data/                # MongoDB persistent volume
│── app/
│   ├── index.js
│   ├── package.json
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|--------|
| Docker | Containerization |
| Docker Compose | Service orchestration |
| MongoDB | NoSQL database |
| Mongo Express | DB UI |
| Node.js | Backend API |

---
---

## ⚙️ Environment Variables

### MongoDB
```env
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=qwerty
```

### Mongo Express
```env
ME_CONFIG_MONGODB_ADMINUSERNAME=admin
ME_CONFIG_MONGODB_ADMINPASSWORD=qwerty
ME_CONFIG_MONGODB_URL=mongodb://admin:qwerty@mongo:27017/
```
---

## ▶️ How to Run the Project

### 1️⃣ Clone Repository
```bash
git clone <your-repo-url>
cd node-app
```

### 2️⃣ Start Containers
```bash
docker-compose up -d
```

### 3️⃣ Verify Running Containers
```bash
docker ps
```

---

## 🌐 Access Services

| Service | URL |
|------|----|
| MongoDB | localhost:27017 |
| Mongo Express | http://localhost:8081 |
| Node API | http://localhost:5050/getUsers |

---

<img src="./screenshots/mongoDB.png" width="600">

## 🔐 Mongo Express Login

- **Username:** admin  
- **Password:** qwerty  

---
<img src="./screenshots/mongo-express.png" width="600">

## 🧹 Cleanup

```bash
docker-compose down -v
```
---