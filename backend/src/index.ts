import path from 'path'
import dotenv from 'dotenv'

import { createServer } from './app'
import { connectDB } from './database/database'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

connectDB()

const app = createServer()

const PORT = process.env.BACKEND_PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
