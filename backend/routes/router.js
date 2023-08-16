import { Router } from 'express'
import {
  postMovie,
  getMovies,
  getMovie
} from '../controller/movieController.js'

const router = Router()

router.post('/movie', postMovie)
router.get('', getMovies)
router.get('/:id', getMovie)

export default router
