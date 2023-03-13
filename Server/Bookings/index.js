import dotenv from 'dotenv'
import express from 'express'
import Router from './Routes.js'
import mongoose from 'mongoose'
import cors from 'cors'
import connectDB from './Models/config.js'


dotenv.config()
const app = express()
app.use(express.json(), cors());


app.use('/', Router)  

connectDB()
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(4321, () => {
        console.log(`Server running on port 4321`);
    });
});