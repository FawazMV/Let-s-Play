import bcrypt from 'bcrypt'
import { otpcallin, verifyOtp } from '../Helpers/Otp.js';
import turfmodel from '../Models/turfModel.js';
export const registration = async (req, res, next) => {
    try {
        const { courtName, email, mobile, password, location, distric, state, event, loction_Details } = req.body
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new turfmodel({
            courtName, email, mobile, location, distric, state, event, loction_Details,
            password: hashedPassword, images: req.files
        });
        console.log(newUser);
        newUser.save();
    }
    catch (err) {
        next(err)
    }
}

export const SendOtp = async (req, res, next) => {
    try {
        const { email, mobile } = req.body
        if (await turfmodel.findOne({ email: email }))
            return res.status(409).json({ message: "User already exists" })
        otpcallin(mobile)
        return res.status(200).json({ message: 'Otp send' })
    }
    catch (err) {
        next(err)
    }
}

export const otpValidation = async (req, res, next) => {
    console.log('helo   ')
    const { otp, mobile } = req.body
    const response = await verifyOtp(mobile, otp).catch(err => next(err))
    if (!response) return res.status(400).json({ message: "Invalid OTP" })
    return res.status(200).json({ message: 'Validation Successful' })
}

export const otpResend = (req, res, next) => {
    otpcallin(req.body.mobile)
    return res.status(200).json({ message: `OTP send to ${req.body.mobile}` });
}