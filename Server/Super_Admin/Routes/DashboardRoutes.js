
import express from 'express'
const router = express.Router()

import { dashboardGraphDetails, getUsersCount, getTurfsCount } from "../Controllers/DashboardControllers.js";

router.get('/graph-details', dashboardGraphDetails)

router.get('/get-user-count', getUsersCount)

router.get('/get-turf-count', getTurfsCount)


export default router   
