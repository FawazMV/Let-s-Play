import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const authVeify = (req, res, next) => {
    console.log(req.query)
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token + 'token');
    if (!token) return res.status(401).json({ message: 'Authentication failed: no token provided.' });
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Authentication failed: invalid token.' });
    }
}
export default authVeify