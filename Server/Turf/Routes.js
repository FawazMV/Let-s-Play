import express from 'express'
import { otpResend, otpValidation, registration, SendOtp } from './Controllers/Authcontroller.js'
import { getAllTurfs, getLocationWiseTurf, getTurfRequests, reqAccept, reqCancel, ManageTurf, getAllTurfsAdmin } from './Controllers/TurfControllers.js'
import upload from './Helpers/multer.js'
const router = express.Router()


router.post('/send-otp', SendOtp)

router.post('/otp', otpValidation)

router.post('otp-resend', otpResend)

router.post('/turf-registration', upload.array('images', 4), registration)

router.get('/turfs', getAllTurfs)

router.get('/turfs-location', getLocationWiseTurf)

router.get('/turfs-admin', getAllTurfsAdmin)

router.get('/turf-requests', getTurfRequests)

router.patch('/turf-accept', reqAccept)

router.delete('/turf-cancel', reqCancel)

router.patch('/turf-manage', ManageTurf)


export default router 