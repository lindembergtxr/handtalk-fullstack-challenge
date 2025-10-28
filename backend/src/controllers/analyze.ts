import { Request, Response } from 'express'

import { validateUrlBody } from '../utils/validateUrlBody'
import { scrapeUrl } from '../services/scraper'

type ReceiveUrl = {
    url: string
}
export const receiveUrl = async (req: Request<object, object, ReceiveUrl>, res: Response) => {
    const { valid, ...data } = validateUrlBody(req.body)

    if (!valid) return res.status(400).json({ status: 'error', ...data })

    const report = await scrapeUrl(data.url!)

    return res
        .status(201)
        .json({ status: 'success', message: `URL ${data.url} received!`, data: report })
}
