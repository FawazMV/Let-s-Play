import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const login = async (req, res, next) => {
    try {
        const user = await user_Model.findOne({ email: req.body.email }).catch(err => next(err))
        if (!user) return res.status(401).json({ msg: "Invalid credentials." });
        const isMatch = await bcrypt.compare(req.body.password, user.password).catch(err => next(err))
        if (!isMatch) return res.status(401).json({ msg: "Invalid credentials.." });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.header("auth-token", token).send(token)
    }
    catch (err) {
        next(error)
    }
}