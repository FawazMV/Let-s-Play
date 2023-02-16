import mongoose from "mongoose";
const turfSchema = new mongoose.Schema
    (
        {
            courtName: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                unique: true,
                trim: true
            },
            mobile: {
                type: String,
                require: true,
                trim: true
            },
            password: {
                type: String,
                trim: true,
                minlength: [6]
            },
            images: {
                type: Array,

            },
            location: {
                type: String,
                trim: true,
                required: true
            },
            loction_Details: {
                type: String,
                trim: true,
                required: true
            },
            distric: {
                type: String,
                trim: true,
                required: true
            },
            state: {
                type: String,
                trim: true,
                required: true
            },
            WorkingTime: {
                startinTime: {
                    type: String,
                },
                endingTime: {
                    type: String,
                }
            },
            Holiday: {
                type: String,
                default: 'Sunday'
            },
            event: {
                type: String,
                trim: true,
                required: true
            },
            Price: {
                type: Number,
                default: '1400'
            }

        },
        {
            timestamps: true
        }
    )

const turfmodel = mongoose.model('turfs', turfSchema)

export default turfmodel