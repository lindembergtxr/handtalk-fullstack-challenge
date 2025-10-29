import { backendInstance } from './api'

export const analyzeUrl = async (url: string) => {
    const response = await backendInstance.post('/api/analyze', { url })
    return response
}
