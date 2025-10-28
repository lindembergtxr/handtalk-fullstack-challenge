import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './database/database'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const app = express()

app.use(express.json())

connectDB()

app.get('/api', (req, res) => {
    res.json({ status: 'ok' })
})

const PORT = process.env.BACKEND_PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
