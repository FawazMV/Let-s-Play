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

export const getLocationWiseTurf = (req, res, next) => {
    try {
        turfmodel.find({ distric: req.query.distric }).then(turfs => {
            console.log(turfs)
            res.status(200).json(turfs)
        })
    }
    catch (err) {
        next(err);
    }
}