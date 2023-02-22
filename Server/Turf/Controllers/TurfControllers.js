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
    turfmodel.find({ distric: req.query.distric }).then(turfs => res.status(200).json(turfs))
        .catch((err) => next(err));
}

export const getTurfRequests = (req, res, next) => {
    turfmodel.find({}).then((data)=> {
        // const jsonData = JSON.stringify(data);
        console.log(data)
        res.status(200).json(data) })
        .catch((err) => next(err));
}