require('dotenv').config();
require('./src/db/db');

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

// routes 

const surveyFormRoute = require('./src/routes/surveyForm');
const admin = require('./src/routes/admin');
const auth = require('./src/routes/auth');

// RestAPI routes
app.use('/api/v1', surveyFormRoute);
app.use('/api/v1', auth);
app.use('/admin', admin);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
} else {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
});