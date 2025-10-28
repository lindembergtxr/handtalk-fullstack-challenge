import { Request, Response } from 'express'

import { validateUrlBody } from '../utils/validateUrlBody'

type ReceiveUrl = {
    url: string
}
export const receiveUrl = (req: Request<object, object, ReceiveUrl>, res: Response) => {
    const { valid, ...data } = validateUrlBody(req.body)

    if (!valid) return res.status(400).json({ status: 'error', ...data })

    return res
        .status(201)
        .json({ status: 'success', message: `URL ${data.url} received!`, data: { output: '' } })
}
