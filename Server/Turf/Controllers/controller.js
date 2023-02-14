import bcrypt from 'bcrypt'
import turfmodel from '../Models/turfModel.js';
export const registration = async (req, res, next) => {
    try {
        const { courtName, email, mobile, password, location, distric, state, event, location_Details } = req.body
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new turfmodel({
            courtName, email, mobile, location, distric, state, event, location_Details,
            password: hashedPassword, images: req.files
        });
        console.log(newUser);
        newUser.save();
    }
    catch (err) {
        next(err)
    } 
}