import turfmodel from "../Models/turfModel.js";

export const getAllTurfs = (req, res, next) => {
    try {
        turfmodel.find().then((turfs) => res.status(200).json(turfs))
            .catch((err) => next(err));
    }
    catch (err) {
        next(err);
    }
}