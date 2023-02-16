import express from 'express'
import { otpResend, otpValidation, registration, SendOtp } from './Controllers/controller.js'
import upload from './Helpers/multer.js'
const router = express.Router()


router.post('send-otp', SendOtp)

router.post('/otp', otpValidation)

router.post('otp-resend', otpResend)

router.post('/turf-registration', upload.array('images', 4), registration)


export default router