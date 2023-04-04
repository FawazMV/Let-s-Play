import bcrypt from 'bcrypt'
import { otpcallin, verifyOtp } from '../Helpers/Otp.js';
import turfmodel from '../Models/turfModel.js';
import jwt from 'jsonwebtoken'

export const registration = async (req, res, next) => {
    try {
        const { courtName, email, mobile, password, location, distric, state, event, loction_Details } = req.body
        const salt = await bcrypt.genSalt();
        if (!req?.files?.length) return res.status(500).json({ message: 'Image not found' })
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new turfmodel({
            courtName, email, mobile, location, distric, state, event, loction_Details,
            password: hashedPassword, images: req.files
        });
        await newUser.save();
        return res.status(200).json({ message: 'Registration successfull' })
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
    const { otp, mobile } = req.body
    const response = await verifyOtp(mobile, otp).catch(err => next(err))
    if (!response) return res.status(400).json({ message: "Invalid OTP" })
    return res.status(200).json({ message: 'Validation Successful' })
}

export const otpResend = (req, res, next) => {
    otpcallin(req.body.mobile)
    return res.status(200).json({ message: `OTP send to ${req.body.mobile}` });
}

export const login = async (req, res, next) => {
    try {
        const user = await turfmodel.findOne({ email: req.body.email }).catch(err => next(err))
        if (!user) return res.status(401).json({ message: "Invalid credentials." });
        const isMatch = await bcrypt.compare(req.body.password, user.password).catch(err => next(err))
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials.." });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.status(200).json({ token });
    }
    catch (err) {
        console.log(err)
        next(err)
    }
}