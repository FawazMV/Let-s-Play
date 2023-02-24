import usermodel from "../Models/User_Model.js"

export const getUsers = (req, res, next) => {
    usermodel.find().then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
}