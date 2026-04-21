require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname,'uploads')));
app.use('/api/members', require('./routes/members'));

mongoose.connect(process.env.MONGO_URI)
.then(()=> app.listen(process.env.PORT, ()=> console.log(`Server running on ${process.env.PORT}`)))
.catch(console.error);
