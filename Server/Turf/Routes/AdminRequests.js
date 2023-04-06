import express from 'express'
import { getAllTurfsAdmin, getTurfRequests, ManageTurf, reqAccept, reqCancel, turfCount } from '../Controllers/TurfControllers.js'

const router = express.Router()




router.get('/all-turfs', getAllTurfsAdmin)

router.get('/requests', getTurfRequests)

router.patch('/accept', reqAccept)

router.delete('/cancel', reqCancel)

router.patch('/manage', ManageTurf)





// dashboard functions

router.get('/get-turf-count', turfCount)



export default router 