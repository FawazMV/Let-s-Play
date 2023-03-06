import dotenv from 'dotenv'
import express from 'express'
import Router from './Routes.js'
import mongoose from 'mongoose'
import cors from 'cors'


dotenv.config()
const app = express()
app.use(express.json(), cors());

const DATABASE_URL = process.env.DATABASE_URL
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE_URL).then(() => console.log('database connection established'))


app.listen(4321, () => console.log('Connected to server 4321'))

app.use('/', Router)  