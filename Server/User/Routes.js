import express from 'express';
import { book, login } from './Controllers/login.js';
import { signUp, otpCheck, otpResend } from './Controllers/signup.js';
import { authVeify } from './Helpers/JWT.js';
const router = express.Router()

router.post('/signup', signUp) 

router.post('otp-resend', otpResend)

router.post('/otp', otpCheck)

router.post('/login', login)
 
router.get('/book', authVeify, book)

export default router  