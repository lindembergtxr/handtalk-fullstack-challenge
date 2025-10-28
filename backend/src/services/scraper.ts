import axios, { AxiosError } from 'axios'
import { JSDOM } from 'jsdom'
import { analyzeDocument } from './analyzeDocument'

export const scrapeUrl = async (url: string) => {
    try {
        const response = await axios.get(url)

        const html = response.data
        const dom = new JSDOM(html)
        const document = dom.window.document

        const report = await analyzeDocument(document)

        return report
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError

            // TODO: register the errors in a better way

            console.error('Axios Error:', axiosError.message)

            if (axiosError.response) {
                console.error('Status:', axiosError.response.status)
                console.error('Data', axiosError.response.data)
            }
        } else {
            console.error('Unexpected Error:', JSON.stringify(error))
        }
    }
}
