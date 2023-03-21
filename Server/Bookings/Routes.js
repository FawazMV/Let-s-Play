import express from 'express';
import { bookSlot, bookedSlot, bookingSuccess, bookingFailed } from './Controllers/bookingControllers.js';
import { paymentIntent } from './Controllers/paymentControllers.js';
import { bookingDetails } from './Controllers/requestControllers.js';
const router = express.Router()

router.get('/payment', paymentIntent)

router.post('/book-slot', bookSlot)

router.get('/booked-slots', bookedSlot)

router.patch('/booking-success', bookingSuccess)

router.patch('/booking-failed', bookingFailed)




//turf requests

router.get('/turf-booked-details', bookingDetails)


export default router  