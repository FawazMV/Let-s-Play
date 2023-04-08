import { AxiosReviw } from "../Helpers/Axiosinstance.js";
import turfmodel from "../Models/turfModel.js";

export const updateRating = async (req, res, next) => {
    try {
        await turfmodel.updateOne({ _id: req.body.id }, { $set: { rating: req.body.rating } })
        return res.status(200).json({ message: 'rating updated successfully' })
    }
    catch (err) {
        return res.status(500).json({ error: 'Internal Server Error', err: err })
    }
}

export const getReviews = async (req, res, next) => {
    try {
        const { data } = AxiosReviw.get('/get-review', { params: { id :req.query.id} })
        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json({ error: 'Internal Server Error', err: err })
    }
}