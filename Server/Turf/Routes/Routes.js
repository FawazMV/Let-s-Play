import express from 'express'
import { otpResend, otpValidation, registration, SendOtp, login } from '../Controllers/Authcontroller.js'
import { bookedTurfs, earningReport, getBookedSlots } from '../Controllers/BookingControllers.js'
import { getpaymentDetails, getTurfGraphData, getTurfBookingCount } from '../Controllers/DashboardControllers.js'
import { updateRating, getReviews } from '../Controllers/ReviewControllers.js'
import { getAllTurfs, getLocationWiseTurf, turfDetails, updateTurfDetails, turfDetailsUser } from '../Controllers/TurfControllers.js'
import { authVeify } from '../Helpers/JWT.js'
import upload from '../Helpers/multer.js'
const router = express.Router()


router.post('/send-otp', SendOtp)

router.post('/otp', otpValidation)

router.post('/otp-resend', otpResend)

router.post('/turf-registration', upload.array('images', 4), registration)

router.post('/turf-login', login)

router.get('/turf-profile', authVeify, turfDetails)

router.patch('/update-turf-profile', authVeify, updateTurfDetails)


router.get('/turfs', getAllTurfs)

router.get('/turfs-location', getLocationWiseTurf)



router.get('/turf-details', turfDetailsUser)







//booking routes

router.get('/booked-details', authVeify, bookedTurfs)

router.get('/earning-report', authVeify, earningReport)

router.get('/booked-slots', getBookedSlots)

//reviews
router.get('/get-review', getReviews)

router.patch('/rating-update', updateRating)


// dashboard functions

router.get('/profit-details', authVeify, getpaymentDetails)

router.get('/turf-graph-data', authVeify, getTurfGraphData)

router.get('/turf-bookings-count', authVeify, getTurfBookingCount)

//

export default router 