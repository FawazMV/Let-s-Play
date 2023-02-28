import usermodel from "../Models/User_Model.js"

export const userDetails = (req, res, next) => {
    usermodel.findById(req.user.id).then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
}

export const updateProfile = async (req, res, next) => {
    const { username, email, mobile } = req.body
    usermodel.updateOne({ _id: req.user.id }, { $set: { username, email, mobile } }).then((x)=>console.log(x))



        
}