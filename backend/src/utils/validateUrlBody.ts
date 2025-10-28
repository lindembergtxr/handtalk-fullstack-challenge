import { stringIsAValidHttpUrl } from './url'

export const validateUrlBody = (body: unknown) => {
    if (typeof body !== 'object' || body === null)
        return { status: 'error', message: 'No body provided', error: { code: 'NO_BODY_PROVIDED' } }

    const internalBody = body as Record<string, unknown>

    const url: unknown = internalBody.url

    if (!('url' in body))
        return {
            status: 'error',
            message: 'Missing URL field.',
            error: { code: 'MISSING_URL' },
        }
    if (typeof url !== 'string')
        return {
            status: 'error',
            message: 'URL must be a string.',
            error: { code: 'STRING_REQUIRED' },
        }
    if (!stringIsAValidHttpUrl(url))
        return {
            status: 'error',
            message: 'URL string not valid.',
            error: {
                code: 'INVALID_URL',
                details: 'URL string must be valid and with http or http protocol',
            },
        }

    return { valid: true, url }
}
