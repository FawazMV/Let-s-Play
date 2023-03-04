import turfmodel from "../Models/turfModel.js";

export const getAllTurfs = (req, res, next) => {
    try {
        turfmodel.find({ request: true, block: false }).then((turfs) => res.status(200).json(turfs))
            .catch((err) => next(err));
    }
    catch (err) {
        next(err);
    }
}

export const getLocationWiseTurf = (req, res, next) => {
    turfmodel.find({ request: true, distric: req.query.distric, block: false }).then(turfs => res.status(200).json(turfs))
        .catch((err) => next(err));
}




export const getAllTurfsAdmin = (req, res, next) => {
    turfmodel.find({ request: true }).then((turfs) => res.status(200).json(turfs))
        .catch((err) => res.status(500).json({ err: err }))
}




export const getTurfRequests = (req, res, next) => {
    turfmodel.find({ request: false }).then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ err: err }))
}

export const reqAccept = (req, res, next) => {
    turfmodel.updateOne({ _id: req.body.id }, { $set: { request: true } }).then(() => res.status(200).json())
        .catch((err) => res.status(500).json({ err: err }))
}

export const reqCancel = (req, res, next) => {
    turfmodel.deleteOne({ _id: req.body.id }).then((x) => res.status(200).json())
        .catch((err) => res.status(500).json({ err: err }))
}

export const ManageTurf = (req, res, next) => {
    turfmodel.updateOne({ _id: req.body.id }, { $set: { block: req.body.status } }).then(() => res.status(200).json())
        .catch((err) => res.status(500).json({ err: err }))
}


export const turfDetails = (req, res, next) => {
    turfmodel.findById(req.user.id).then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
}

export const updateTurfDetails = (req, res, next) => {
    console.log(req.body)
    const data = req.body
    turfmodel.updateOne({ _id: req.user.id }, { $set: data }).then(() => res.status(200).json())
        .catch(err => res.status(500).json(err))
}