import axios from 'axios'

const port = import.meta.env.VITE_BACKEND_PORT

export const backendInstance = axios.create({
    baseURL: `http://localhost:${port}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})
