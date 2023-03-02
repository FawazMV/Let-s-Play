import express from 'express';
import { book, login } from './Controllers/login.js';
import { getUsers } from './Controllers/OtherControllers.js';
import { updateProfile, userDetails } from './Controllers/ProfileControllers.js';
import { otpSend, otpCheck, otpResend, registerUser } from './Controllers/signup.js';
import { authVeify } from './Helpers/JWT.js';
const router = express.Router() 

router.post('/otp-send', otpSend)

router.post('otp-resend', otpResend)

router.post('/verify-otp', otpCheck)

router.post('/register-user', registerUser)

router.post('/login', login)



router.get('/user-profile', authVeify, userDetails)

router.put('/update-profile', authVeify, updateProfile)



router.get('/get-users', getUsers)


export default router  