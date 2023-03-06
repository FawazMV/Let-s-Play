import express from 'express';
import { getUsers } from '../Controllers/requestControllers.js';

const router = express.Router()


router.get('/get-users', getUsers)


export default router  