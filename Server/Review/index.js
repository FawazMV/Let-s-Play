import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import connectDB from './Models/config.js'

import Routes from './Routes.js'

dotenv.config()
const app = express()
app.use(express.json(), cors());

app.use('/', Routes)

connectDB()
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(9999, () => {
        console.log(`Server running on port 9999`);
    });
});