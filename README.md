# Caketopia – Bakery Management Application

Welcome to **Caketopia** – a modern web app to manage your bakery orders, inventory, sales, and much more—all in a clean, user-friendly dashboard!

## 🚀 Features

- Order tracking with status and customer notes
- Inventory for ingredients
- Dashboard for sales and profit overview

---

## 📝 Get Started

### 1. Clone The Repository

```bash
git clone https://github.com/lu-kog/caketopia.git
cd caketopia
```

### 2. Install Dependencies

Ensure you have **Node.js ≥ 18** and **npm** installed.

```bash
npm install
```

### 3.0 Setup the Database

(if postgres not installed)  -- to check `psql --version`

```bash
sudo apt install postgresql postgresql-contrib
```

Login psql

```bash
psql postgres
```

```sql
CREATE USER caketopiadevuser WITH PASSWORD 'NDVY';
DROP DATABASE IF EXISTS caketopia;
CREATE DATABASE caketopia OWNER caketopiadevuser;
GRANT ALL PRIVILEGES ON DATABASE caketopia TO caketopiadevuser;

\c caketopia

```

#### load tables and dummy data

copy from  [Database_design/tables.sql](Database_design/tables.sql) and paste on db


### 3.1 Start The Application

```bash
cd Server
npm start

cd ../Client
npm start
```

The app runs locally at: [http://localhost:3000](http://localhost:3000)

---


Enjoy running your bakery with Caketopia 🎂🍰🥐
