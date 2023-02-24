import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const authVeify = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ message: 'No token provided' })
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (err) {
        res.status(400).json({ message: "Invalid token" })
    }
}