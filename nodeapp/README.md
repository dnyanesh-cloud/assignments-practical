# Node.js Application Deployment

This project demonstrates how to deploy a Node.js application on a Linux server using **Nginx as a reverse proxy** and **PM2 as a process manager runs application in background**.
---
## 📌 Prerequisites
- Linux server with sudo access
- Open port **80** (HTTP) and **3000** (Node app – internal)
---

## 🛠️ Step-by-Step Setup

### 1️⃣ System Update & Upgrade
```bash
sudo yum update -y
sudo yum upgrade -y
```

### 2️⃣ Install Node.js & NPM
```bash
sudo yum install nodejs -y
node -v
npm -v
```

### 3️⃣ Create Node.js Application
```bash
mkdir nodeapp
cd nodeapp
nano package.json
nano index.js
npm install
node index.js
```

> App runs on port **3000**

### 4️⃣ Install & Configure Nginx
```bash
sudo yum install nginx -y
sudo service nginx start
sudo nano /etc/nginx/nginx.conf
```

Nginx reverse proxy config:
```nginx
location / {
    proxy_pass http://localhost:3000;
}
```

Restart Nginx:
```bash
sudo service nginx restart
```

### 5️⃣ Install PM2
```bash
sudo npm install -g pm2
pm2 --version
pm2 start index.js
pm2 stop index.js
```

---

## ✅ Final Result
- Node app managed by PM2
- Nginx routes traffic from port 80 to 3000
- Application accessible via public IP or domain

---

## 📚 Useful PM2 Commands
```bash
pm2 list
pm2 restart index.js
pm2 logs
pm2 delete index.js
```

---

## 🧠 Key Learnings
- Nginx reverse proxy
- PM2 process management
- Production-ready Node.js deployment

---

## 📌 Author
**Dnyaneshwar Bhandari**  
Cloud & DevOps Enthusiast 🚀
