# 3-Tier Architecture Project on AWS

## Project Overview
This project demonstrates a **3-tier architecture** using AWS services, separating the application into **Web, Application, and Database tiers**.  
It is designed for **scalability, security, and high availability**.

- **Web Tier:** Hosts the front-end interface using EC2 instances in a public subnet.  
- **Application Tier:** Processes business logic in EC2 instances located in private subnets.  
- **Database Tier:** Stores persistent data using RDS in private subnets 

---

## Architecture Components

| Tier | AWS Services | Description |
|------|-------------|------------|
| Web | EC2, Security Groups, Public Subnet, IGW | Handles user requests and serves web content |
| Application | EC2, Private Subnet, NAT Gateway | Processes business logic, communicates with DB |
| Database | RDS, Private Subnets,  | Stores data securely with high availability |
| Networking | VPC, Subnets, Route Tables, IGW, NAT Gateway | Provides isolated network with controlled access |

---
## Deployment Steps

### Step 1 :- Create Custom VPC
cidr-block 10.0.0.0/16
![](./Img/Screenshot%20(92).png)

### Step 2 :- Create subnets for Web, App, and DB 
 Create two subnets for DB one in Availability Zone A & one in Availability Zone B (for RDS DB subnet group)

![](./Img/Screenshot%20(93).png)

### Step 3 :- Create Internet gateway and attach to custom vpc
![](./Img/Screenshot%20(95).png)

### Step 4 :- Create NAT gateway
![](./Img/Screenshot%20(96).png)

### Step 5 :- Create Route table
1.Public Route Table :-
By default, AWS automatically creates a route table for the VPC (public route).  
   - Attach it to the **public subnet**.
   - Configure route to Internet Gateway (IGW)

2.Private Route Table :- Manually create a new route table for private subnets.  
   - Add a route to the **NAT Gateway** for internet access.  
   - Attach this private route table to all **private subnets** (App & DB).

![](./Img/Screenshot%20(94).png)

### Step 6 :- Create DB Subnet group on RDS
Name → Description → Select your VPC → Select two DB subnet
![](./Img/Screenshot%20(97).png)

### Step 7 :- Create Database
Standard create → Mysql → Free tier → Master username & Password → Choose DB subnet group → Select VPC → After creating databse add rule of MySQL/Aurora in security group

![](./Img/Screenshot%20(98).png)

### Step 8 :- Launch two instance 
1.**WebServer** : In netwok settings
→ Select custom Vpc → Select web subnet → Public Ip enable → add rule 80 in security group

2.**AppServer** : In netwok settings
→ Select custom Vpc → Select App subnet → Public Ip disable → add rule 80 in security group

![](./Img/Screenshot%20(99).png)

### Step 9 :- SSH to web server and Install nginx
![](./Img/Screenshot%20(100).png)

### Step 10 :- Start nginx
1.Go to /usr/share/nginx/html → Create forms.html page → Write code → When form submitted, sends the data to submit.php on the App server.
![](./Img/Screenshot%20(101).png)

### Step 11 :- In Nginx configuration, add proxy_pass to the App server’s private IP
![](./Img/Screenshot%20(102).png)

### Step 12 :- Copy key pair to the server
1.SSH to web server
2.Give 400 permission to key pair
3.SSH to app server 
4.Install nginx & php
![](./Img/Screenshot%20(103).png)

### Step 13 :- Start Nginx & PHP
1.Go to /usr/share/nginx/html     
2.Create submit.php page    
3.Add PHP code to connect to your RDS database by including:
- RDS endpoint
- Databse name
- Username 
- Password

![](./Img/Screenshot%20(104).png)

### Step 14 :- In web server install Mariadb 

![](./Img/Screenshot%20(105).png)

### Step 15 :- Login to RDS
1.Create database & table  

![](./Img/Screenshot%20(106).png)

### Step 16 :- In App server install MySQL connector
1.php8.4-mysqlnd.x86_64 (connector)

![](./Img/Screenshot%20(107).png)

### Step 17 :- Restart all services

![](./Img/Screenshot%20(108).png)

### Step 18 :- Access form.html via Web server’s public IP

![](./Img/Screenshot%20(109).png)

### Step 19 :- Submit the form
![](./Img/Screenshot%20(110).png)

### Step 20 :- Check data stored in your RDS database

![](./Img/Screenshot%20(114).png)














