import express from 'express';
import { login } from './Controllers/login.js';
import { getTurfRequests } from './Controllers/TurfControllers.js';
import { authVeify } from './Helpers/JWT.js';
const router = express.Router()

router.post('/login', login)

router.get('/turf-requests', getTurfRequests)

export default router  