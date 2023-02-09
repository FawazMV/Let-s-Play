import express from 'express';
import { login } from './Controllers/login.js';
import { authVeify } from './Helpers/JWT.js';
const router = express.Router()

router.post('/login', login)

export default router  