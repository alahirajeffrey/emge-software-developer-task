const express = require('express');
const connectDatabase = require('./utils/connectDatabase');
const dotenv = require('dotenv').config();
const expenseRoutes = require('./routes/expenseRoute');
const authRoutes = require('./routes/authRoutes');

//setup express app
const app = express();

//port number
port = process.env.PORT || 8080;

//connect to database
connectDatabase();

//configure app
app.use(express.json());
app.use(expenseRoutes);
app.use(authRoutes);

//setup server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});