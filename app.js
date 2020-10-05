const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//Import Routes
const postRoute = require('./Routes/posts');

// Middleware
app.use('/posts', postRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },  () => {
    console.log('connected to db!')
})

app.listen(3000)