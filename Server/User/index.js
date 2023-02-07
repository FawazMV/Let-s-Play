import dotenv from 'dotenv'
import express from 'express'
import Router from './Routes.js'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


dotenv.config()
const app = express()
// app.use(bodyParser.json())
app.use(express.json(),cors());
// app.use(express.urlencoded({ extended: false }));

const DATABASE_URL = process.env.DATABASE_URL
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE_URL, () => console.log('Database Connected'))

    
app.listen(7777, () => console.log('Connected to server 7777'))

app.use('/', Router) 