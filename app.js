const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json());

//Import Routes
const postRoute = require('./Routes/posts');

// Middleware
app.use('/posts', postRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home')
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },  () => {
    console.log('connected to db!')
})

app.listen(5000)