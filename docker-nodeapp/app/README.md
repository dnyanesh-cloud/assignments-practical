# 🚀 MongoDB + Mongo Express + Node App (Docker Setup)

---

---

## 🛠 Prerequisites

- Docker  
- Docker Compose  
- Node.js (optional)

---

## 📦 Step 1: Create Project Directory

```bash
mkdir node-app
cd node-app
```

---

## 🐳 Step 2: Create Docker Network (Optional)

```bash
docker network create mongo-network
```

---

## 🧱 Step 3: Run MongoDB Container

```bash
docker run -d \
  -p 27017:27017 \
  --name mongo \
  --network mongo-network \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=qwerty \
  mongo
```

---

## 🌐 Step 4: Run Mongo Express Container

```bash
docker run -d \
  -p 8081:8081 \
  --name mongo-express \
  --network mongo-network \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=qwerty \
  -e ME_CONFIG_MONGODB_URL="mongodb://admin:qwerty@mongo:27017" \
  mongo-express
```

---

## 🗄 Step 5: Database Operations

- Create database
- Create collection
- Insert sample document
- Verify data

---

## 🔌 Step 6: Verify Node App Connection

```bash
http://localhost:5050/getUsers
```

---
