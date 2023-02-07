import mongoose from "mongoose";
import mongoose from 'mongoose'
const turfSchema = new mongoose.Schema
    (
        {
            turfname: {
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
            Location: {
                type: String,
                trim: true,
                required: true
            },
            LocationDescription: {
                type: String,
                trim: true,
                required: true
            },
            District: {
                type: String,
                trim: true,
                required: true
            },
            State: {
                type: String,
                trim: true,
                required: true
            },
            EnquiryNo: {
                type: Number,
                required: true
            },
            WorkingTime: {
                startinTime: {
                    type: String,
                    required: true
                },
                endingTime: {
                    type: String,
                    required: true
                }
            },
            Holiday: {
                type: String,
                default: 'Sunday'
            },
            SportsType: {
                type: String,
                trim: true,
                required: true
            },
            Price: {
                type: Number,
                required: true
            }

        },
        {
            timestamps: true
        }
    )

const turfmodel = mongoose.model('turfs', turfSchema)

export default turfmodel