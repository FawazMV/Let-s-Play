import { otpcallin, verifyOtp } from '../Helpers/Otp.js'
import user_Model from '../Models/User_Model.js'
import bcrypt from 'bcrypt'


export const signUp = async (req, res, next) => {
    try {
        const user = await user_Model.findOne({ email: req.body.email })
        if (user) return res.status(409).json({ message: "User already exists" })
        const mobile = await user_Model.findOne({ mobile: req.body.mobile })
        if (mobile) return res.status(409).json({ message: "Mobile Number already registred" })
        otpcallin(req.body.mobile)
        return res.status(200).json({ message: `OTP send to ${req.body.mobile}` });
    }
    catch (error) {
        next(error)
    }
}

export const otpCheck = (req, res, next) => {
    try {
        const { email, password, mobile, username, otp } = req.body;
        verifyOtp(mobile, otp).then(async response => {
            if (!response) return res.status(400).json({ message: "Invalid OTP" })
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new user_Model({
                username, email, mobile,
                password: hashedPassword,
            });
            newUser.save();
            return res.status(201).json({ message: "User created" });
        }).catch(error => next(error))
    }
    catch (error) {
        next(error)
    }
}

export const otpResend=(req,res,next)=>{
    otpcallin(req.body.mobile)
    return res.status(200).json({ message: `OTP send to ${req.body.mobile}` });
}