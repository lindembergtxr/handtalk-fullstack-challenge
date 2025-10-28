import express from 'express'
import cors from 'cors'
import { router } from './routes/index.js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const corsOptions = {
    origin: `http://localhost:${process.env.FRONTEND_PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}

export const createServer = () => {
    const app = express()

    app.use(cors(corsOptions))

    app.use(express.json())

    app.use('/api', router)

    return app
}
