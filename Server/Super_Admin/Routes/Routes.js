import express from 'express';
import { getReports } from '../Controllers/bookingControllers.js';
import { login } from '../Controllers/login.js';
import { getTurfRequests, reqAccept, getTurfsAccepted, reqCancel, ManageTurf } from '../Controllers/TurfControllers.js';
import { getUsers } from '../Controllers/UserControllers.js';
import { authVeify } from '../Helpers/JWT.js';
const router = express.Router()

router.post('/login', login)

router.get('/turf-requests', getTurfRequests)

router.get('/turf-accepted', getTurfsAccepted)

router.patch('/turf-accept', reqAccept)

router.delete('/turf-cancel', reqCancel)

router.patch('/turf-manage', ManageTurf)





router.get('/show-users', getUsers)



//booking request

router.get('/all-booking-report', getReports)


export default router   