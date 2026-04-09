#  Inventory Management System (Full Stack)

A complete **Full-Stack Inventory Management System** built using **React, Python (Flask), and MySQL**, deployed using modern cloud platforms.

---

##  Live Demo

*  Frontend: https://your-netlify-link.netlify.app
*  Backend: https://inventory-fullstack-app-production.up.railway.app

---

##  Features

###  Core Features

*  Add Supplier
*  Add Inventory Items
*  Search Products (by name)
*  Delete Inventory Items
*  Real-time UI updates

---

##  Tech Stack

### Frontend

* React.js (Vite)
* JavaScript (ES6+)
* HTML5 & CSS3

### Backend

* Python (Flask)
* REST APIs
* Flask-CORS

### Database

* MySQL (Railway Cloud)

### Deployment

* Frontend: Netlify
* Backend: Railway

---

##  Project Structure

```
inventory-fullstack-app/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🗄️ Database Schema

```sql
CREATE TABLE suppliers (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 city VARCHAR(100)
);

CREATE TABLE inventory (
 id INT AUTO_INCREMENT PRIMARY KEY,
 supplier_id INT,
 product_name VARCHAR(100),
 category VARCHAR(100),
 quantity INT,
 price FLOAT,
 FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
```

---

##  Getting Started (Local Setup)

###  Clone Repository

```
git clone https://github.com/<your-username>/inventory-fullstack-app.git
cd inventory-fullstack-app
```

---

### Backend Setup

```
cd backend
pip install -r requirements.txt
```

Create `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=inventory_db
DB_PORT=3306
```

Run backend:

```
python app.py
```

---

###  Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | /search?q=      | Search products |
| POST   | /supplier       | Add supplier    |
| POST   | /inventory      | Add inventory   |
| GET    | /inventory      | Get all items   |
| DELETE | /inventory/{id} | Delete item     |

---

## 🧪 Example Usage

### Add Supplier

```json
{
  "name": "ABC Suppliers",
  "city": "Hyderabad"
}
```

---

### Add Inventory

```json
{
  "supplier_id": 1,
  "product_name": "Chair",
  "category": "Furniture",
  "quantity": 10,
  "price": 150
}
```

---

##  Important Notes

* Backend uses environment variables for security
* MySQL hosted on Railway cloud
* CORS enabled for frontend communication
* Production-ready structure

##  Author

**Medapati Manmohan Reddy**

* GitHub: https://github.com/manmohangithub
* LinkedIn: https://www.linkedin.com/in/manmohanreddy1111

---

##  Conclusion

This project demonstrates a **complete full-stack workflow** including:

* API design
* Database integration
* Cloud deployment
* Frontend-backend communication


⭐ If you found this useful, give it a star!
