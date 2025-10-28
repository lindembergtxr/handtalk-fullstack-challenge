import { Request, Response } from 'express'

type ReceiveUrl = {
    url: string
}
export const receiveUrl = (req: Request<object, object, ReceiveUrl>, res: Response) => {
    const { url } = req.body

    res.status(201).json({ message: `URL ${url} received!` })
}
