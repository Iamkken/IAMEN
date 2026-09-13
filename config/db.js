const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dburl = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(dburl);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:');
    }
};

module.exports = connectDB;