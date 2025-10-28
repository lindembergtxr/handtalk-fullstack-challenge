import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const { DATABASE_USER, DATABASE_PASS, DATABASE_NAME, DATABASE_HOST, DATABASE_PORT } =
            process.env

        const mongoUri = `mongodb://${DATABASE_USER}:${DATABASE_PASS}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?authSource=admin`

        await mongoose.connect(mongoUri)
        console.log('✅ MongoDB connected!')
    } catch (err) {
        console.error('❌ MongoDB connection error:', err)
        process.exit(1)
    }
}
