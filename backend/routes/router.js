import { Router } from 'express'
import { postMovie } from '../controller/movieController.js'

const router = Router()

router.post('/movie', postMovie)

export default router
