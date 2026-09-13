const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const connectDB = require('./config/db');
const studentRoutes = require('./routes/student.routes');

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('WELCOME! This is the home page of the serverrr!!!');
});

app.use(morgan('dev'));  ///Activity recorder in terminal for every request made to the server. 

app.use(express.json());                 //THE MIDDLEWARE//

app.use('/students', studentRoutes);    //THIS MEANING MOUNTING ROUTES and which connects other files(ROUTES>CONTROLLERS>MODELS>DB)

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});