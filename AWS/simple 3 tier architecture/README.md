# Simple 3-Tier Architecture on AWS

This project explains how to build a **Simple 3-Tier Architecture** on **AWS** with clear **step-by-step implementation** and **visual references**.

---


## Tier Overview

### 1️⃣ Web Tier (Public Subnet)

- Public-facing layer
- Accepts user requests
- Hosted on **EC2 with Nginx**



### 2️⃣ Application Tier (Private Subnet)

- Handles business logic
- Runs **PHP + Nginx**
- Communicates with Database



### 3️⃣ Database Tier (Private Subnet)

- Stores application data
- Uses **Amazon RDS (MySQL)**
- No public access



---

## Step-by-Step Implementation

---

## Step 1: Create VPC

- Go to **VPC Dashboard**
- Create VPC
- CIDR: `172.1.0.0/16`
- Name: `custom-vpc`



---

## Step 2: Create Subnets

### Public Subnet (Web Tier)

- CIDR: `172.1.0.0/20`
- Enable Auto-assign Public IP

### Private Subnet (App Tier)

- CIDR: `172.1.16.0/20`

### Private Subnets (DB Tier)

- CIDR: `172.1.32.0/20`



---

## Step 3: Internet Gateway

- Create Internet Gateway
- Attach to `custom-vpc`



---

## Step 4: Route Tables

### Public Route Table

- Route: `0.0.0.0/0 → Internet Gateway`
- Associate with Public Subnet

### Private Route Table

- Route: `0.0.0.0/0 → NAT Gateway`
- Associate with Private Subnets



---

## Step 5: NAT Gateway

- Create NAT Gateway in Public Subnet
- Allocate Elastic IP
- Attach to Private Route Table



---

## Step 6: Launch Web Server (EC2)

- Subnet: Public
- Install Nginx

```bash
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```



---

## Step 7: Launch App Server (EC2)

- Subnet: Private
- Install PHP, Nginx, MySQL client

```bash
sudo yum install php php-fpm nginx php-mysqlnd -y
sudo systemctl start php-fpm
sudo systemctl start nginx
```



---

## Step 8: Create RDS (Database Tier)

- Engine: MySQL
- Public Access: No
- DB Subnet Group: Private Subnets



---

## Step 9: Configure Security Groups

### Web Server SG

- Allow HTTP (80) from anywhere

### App Server SG

- Allow HTTP (80) from Web Server SG

### RDS SG

- Allow MySQL (3306) from App Server Private IP



---

## Step 10: Database Setup

```sql
CREATE DATABASE facebook;
USE facebook;
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20),
  password VARCHAR(20)
);
```

