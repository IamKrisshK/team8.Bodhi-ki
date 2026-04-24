# Student Team Members Management Application

A full-stack web application to manage student team members with profile image upload, member listing, and detailed profile viewing.

---

## Project Overview

The Student Team Members Management Application helps student groups organize and manage their team information in one place.

Users can:

- Add new members
- Upload profile photos
- View all members
- View full member details
- Store data securely in MongoDB

This project is built using:

- Frontend: React.js
- Backend: Node.js + Express.js
- Database: MongoDB
- Styling: CSS3
- Image Upload: Multer

---

## Features

- Home Page with team introduction
- Add Member Form
- Image Upload Support
- View All Members Page
- Member Details Page
- REST API Integration
- Clean Responsive UI

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Tools
- Multer
- VS Code
- MongoDB Compass

---

## Project Structure

```text
student-team-app/
│── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
│── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env
│
│── README.md
│── .gitignore

```
---

## Installation Steps

### 1. Clone the Repository

git clone https://github.com/IamKrisshK/team8.Bodhi-ki
cd team8.Bodhi-ki

### 2. Install Frontend Dependencies

cd frontend  
npm install  
npm install axios react-router-dom

### 3. Install Backend Dependencies

cd ../backend  
npm install  
npm install express mongoose cors multer dotenv  
npm install nodemon --save-dev

### 4. Configure Environment Variables

Create a `.env` file inside the backend folder.

MONGO_URI=mongodb://127.0.0.1:27017
PORT=5050

---

## How to Run the Application

### Run Backend Server

cd backend  
npm run dev

Backend runs at:

http://localhost:5000

### Run Frontend Application

Open a new terminal:

cd frontend  
npm start

Frontend runs at:

http://localhost:3000

---

## API Endpoints

### Base URL

http://localhost:5000/api/members

### Get All Members

GET /api/members

Fetch all team members from MongoDB.

### Get Single Member

GET /api/members/:id

Fetch complete details of one member using ID.

### Example

GET /api/members/661234abcd5678ef9012

### Add New Member

POST /api/members

Add a new team member with image upload.

#### Form Data

- name
- role
- email
- contact
- bio
- image

---

## UI Pages Included

- Home Page
- Add Member Page
- View Members Page
- Member Details Page

---

## Sample Workflow

1. Open Home Page  
2. Click Add Member  
3. Fill form and upload image  
4. Submit member details  
5. View members list  
6. Click View Details
