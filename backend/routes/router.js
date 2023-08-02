import { Router } from 'express'
import { postMovie, getMovies } from '../controller/movieController.js'

const router = Router()

router.post('/movie', postMovie)
router.get('', getMovies)

export default router
