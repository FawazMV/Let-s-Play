
import express from 'express'
const router = express.Router()

import { dashboardGraphDetails, getUsersCount, getTurfsCount, getProfit } from "../Controllers/DashboardControllers.js";

router.get('/graph-details', dashboardGraphDetails)

router.get('/get-user-count', getUsersCount)

router.get('/get-turf-count', getTurfsCount)

router.get('/get-profit', getProfit)

export default router   
