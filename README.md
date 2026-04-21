# Student Team Members Management Application
##By Team 8 Bodhi-Ki

## Project Description

The **Student Team Members Management Application** is a full-stack web application developed to manage student team members in an organized and efficient way. This system allows users to add new team members, upload profile images, view all members, and view detailed information about individual members.

It is designed for student project groups, academic teams, clubs, or organizations that need a simple digital platform to maintain member records.

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

# Project Structure

```text
student-team-app/
│── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
│── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
│── README.md
│── .gitignore
```

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
