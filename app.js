const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//DB
const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI;
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.on('connected', err => console.log('DB connected!'));

//App
const app = express();

//Route handlers
const apiRouter = require('./routes/apiRouter');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.all('/', (req, res) => {
    res.redirect('/api');
});

app.use('/api', apiRouter);

//Start app
app.listen(3000, () => {
    console.log('Server up and running!');
});