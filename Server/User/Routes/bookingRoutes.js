import express from 'express';
import { bookSlot } from '../Controllers/bookingControllers.js';
import authVeify from '../Helpers/JWT.js';

const router = express.Router()


router.post('/slot', authVeify, bookSlot)


export default router     