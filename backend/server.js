import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/db.js'
import router from './routes/router.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/catalog', router)

app.listen(process.env.PORT, connectToDB)
