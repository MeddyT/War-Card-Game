require('dotenv').config();
const express = require('express');
const app= express();

const path= require('path');
const cors =require('cors');
const mongoose= require('mongoose');
const connectDB= require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const PORT= process.env.PORT || 5000;



app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/public')));


app.use(['/'], require('./routes/root'));
app.use('/game', require('./routes/game'));
app.use('/auth', require('./routes/auth'));
app.use('/scores', require('./routes/score'));


app.all('/{*any}', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});



app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)
  );