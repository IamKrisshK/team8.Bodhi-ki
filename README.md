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

```text
## Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Tools
- Multer (Image Upload)
- Visual Studio Code
- MongoDB Compass

---

# Features

- Clean and user-friendly homepage
- Add new team members with image upload
- View all team members
- View complete member details
- Store data in MongoDB
- REST API integration
- Responsive modern UI

---

Installation Steps
##1. Clone the Repository
git clone https://github.com/your-team-name/your-repository-name.git
cd your-repository-name
##2. Install Frontend Dependencies
cd frontend
npm install
npm install axios react-router-dom
##3. Install Backend Dependencies
cd ../backend
npm install
npm install express mongoose cors multer dotenv
npm install nodemon --save-dev
##4. Configure Environment Variables

Create a .env file inside the backend folder.

MONGO_URI=mongodb://127.0.0.1:27017/teamdb
PORT=5000

##How to Run the Application
Run Backend Server
cd backend
npm run dev

Backend runs at:

http://localhost:5000
Run Frontend Application

Open a new terminal:

cd frontend
npm start

Frontend runs at:

http://localhost:3000
##API Endpoints
Base URL
http://localhost:5000/api/members
1. Get All Members
GET /api/members
Description:

Fetch all team members from MongoDB.

2. Get Single Member
GET /api/members/:id
Description:

Fetch complete details of one member using ID.

###Example:
GET /api/members/661234abcd5678ef9012
3. Add New Member
POST /api/members
Description:

Add a new team member with image upload.

Form Data:
name
role
email
contact
bio
image
UI Pages Included
Home Page
Add Member Page
View Members Page
Member Details Page
##Sample Workflow
Open Home Page
Click Add Member
Fill form and upload image
Submit member details
View members list
Click View Details
