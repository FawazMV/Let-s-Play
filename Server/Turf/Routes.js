import express from 'express'
import { registration } from './Controllers/controller.js'
import upload from './Helpers/multer.js'
const router = express.Router()

router.post('/turf-registration', upload.array('images', 4), registration)
 

export default router