import express from 'express';
import { book, login } from './Controllers/login.js';
import { getUsers } from './Controllers/OtherControllers.js';
import { updateProfile, userDetails } from './Controllers/ProfileControllers.js';
import { signUp, otpCheck, otpResend } from './Controllers/signup.js';
import { authVeify } from './Helpers/JWT.js';
const router = express.Router() 

router.post('/signup', signUp)

router.post('otp-resend', otpResend)

router.post('/otp', otpCheck)

router.post('/login', login)



router.get('/user-profile', authVeify, userDetails)

router.put('/update-profile', authVeify, updateProfile)



router.get('/get-users', getUsers)


export default router  