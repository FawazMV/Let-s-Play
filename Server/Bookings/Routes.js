import express from 'express';
import { bookSlot, bookedSlot, bookingSuccess, bookingFailed } from './Controllers/bookingControllers.js';
import { allReports, turfWiseEarningReport, getPaymentDetails } from './Controllers/earningReportControllers.js';
import { paymentIntent } from './Controllers/paymentControllers.js';
import { bookingDetails, userBookings } from './Controllers/requestControllers.js';
const router = express.Router()

router.get('/payment', paymentIntent)

router.post('/book-slot', bookSlot)

router.get('/booked-slots', bookedSlot)

router.patch('/booking-success', bookingSuccess)

router.patch('/booking-failed', bookingFailed)




//turf requests

router.get('/turf-booked-details', bookingDetails)

router.get('/collection-report', turfWiseEarningReport)

//turf req - dashboard

router.get('/turf-profit-details', getPaymentDetails)

//user requests

router.get('/user-bookings', userBookings)




//superAdminrequests
router.get('/all-reports', allReports)



export default router  