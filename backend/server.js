import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/db.js'
import router from './routes/router.js'
import errorHandler, {
  noutFound
} from './middlewares/errorHandlingMiddlewares.js'

const PORT = process.env.PORT || 5000

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/catalog', router)

app.use(noutFound)
app.use(errorHandler)

app.listen(PORT, connectToDB)
