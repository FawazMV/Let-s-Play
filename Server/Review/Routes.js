import express from "express";
import { reviewSubmit } from "./Controllers/controllers.js";
const router = express.Router()


router.post('/review-submit', reviewSubmit)

export default router