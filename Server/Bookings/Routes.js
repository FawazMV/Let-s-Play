import express from 'express';
import { bookSlot, bookedSlot, bookingSuccess } from './Controllers/bookingControllers.js';
import { paymentIntent } from './Controllers/paymentControllers.js';
const router = express.Router()

router.get('/payment', paymentIntent)

router.post('/book-slot', bookSlot)

router.get('/booked-slots', bookedSlot)

router.patch('/booking-success', bookingSuccess )

export default router  