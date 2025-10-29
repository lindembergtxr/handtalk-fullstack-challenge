import axios, { AxiosError } from 'axios'
import { backendInstance } from './api'

export const analyzeUrl = async (url: string) => {
    try {
        const response = await backendInstance.post('/api/analyze', { url })

        return { success: true, data: response.data }
    } catch (err) {
        let errorData: any = null

        if (axios.isAxiosError(err)) {
            const axiosErr = err as AxiosError
            errorData = {
                status: axiosErr.response?.status,
                message: axiosErr.response?.data || axiosErr.message,
            }
        } else errorData = { message: (err as Error).message || 'Unknown error' }

        return { success: false, error: errorData }
    }
}
