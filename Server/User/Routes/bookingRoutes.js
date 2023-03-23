import express from 'express';
import { bookSlot, userBookings } from '../Controllers/bookingControllers.js';
import authVeify from '../Helpers/JWT.js';

const router = express.Router()


router.post('/slot', authVeify, bookSlot)

router.get('/details', authVeify, userBookings)



export default router     