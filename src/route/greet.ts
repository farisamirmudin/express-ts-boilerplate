import express from 'express'
import { about, greet } from '../controller/greetController'

const router = express.Router()

router.get('/', greet)

router.get('/about', about)

export default router