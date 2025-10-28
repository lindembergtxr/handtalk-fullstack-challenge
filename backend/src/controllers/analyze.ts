import { Request, Response } from 'express'

import { validateUrlBody } from '../utils/validateUrlBody'
import { scrapeUrl } from '../services/scraper'
import { saveReport } from '../database/createReport'

type ReceiveUrl = {
    url: string
}
export const receiveUrl = async (req: Request<object, object, ReceiveUrl>, res: Response) => {
    const { valid, ...data } = validateUrlBody(req.body)

    if (!valid) return res.status(400).json({ status: 'error', ...data })

    const report = await scrapeUrl(data.url!)

    if (report) await saveReport(report)
    else return res.status(400).json({ status: 'error', message: 'Failed to create report!' })

    return res
        .status(201)
        .json({ status: 'success', message: `URL ${data.url} received!`, data: report })
}
