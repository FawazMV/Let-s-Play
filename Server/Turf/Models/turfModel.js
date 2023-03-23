import mongoose from "mongoose";
const turfSchema = new mongoose.Schema
    (
        {
            courtName: {
                type: String,
                trim: true,
                required: true
            },
            email: {
                type: String,
                unique: true,
                trim: true,
                required: true
            },
            mobile: {
                type: String,
                require: true,
                trim: true,
                required: true
            },
            password: {
                type: String,
                trim: true,
                required: true
            },
            images: {
                type: Array,
                required: true
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
            },
            enquiryNumber: {
                type: String
            },
            openingTime: {
                type: String
            },
            closingTime: {
                type: String
            },
            request: {
                type: Boolean,
                default: false
            },
            block: {
                type: Boolean,
                default: false
            },
            rating:{
                type:Number,
                default:0
            },
            reviews:{type:Array}


        },
        {
            timestamps: true
        }
    )

const turfmodel = mongoose.model('turfs', turfSchema)

export default turfmodel