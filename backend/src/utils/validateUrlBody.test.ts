import { describe, it, expect } from 'vitest'

import { validateUrlBody } from './validateUrlBody'

describe('validateUrlBody', () => {
    it('should return true for valid http or https URLs', () => {
        const validUrls = [
            'http://google.com',
            'https://example.com',
            'http://exämple.com',
            'http://example.com/path/to/somewhere',
            'http://example.com/path/to/somewhere?args=true',
        ]
        validUrls.forEach((url) => {
            expect(validateUrlBody({ url })).toEqual({ valid: true, url })
        })
    })

    it('no body provided', () => {
        const invalidValues = [undefined, null, false, 0, '']

        const NO_BODY_PROVIDED_RETURN = {
            status: 'error',
            message: 'No body provided',
            error: { code: 'NO_BODY_PROVIDED' },
        }
        invalidValues.forEach((body) => {
            expect(validateUrlBody(body)).toEqual(NO_BODY_PROVIDED_RETURN)
        })
    })

    it('missing url provided', () => {
        const invalidValues = [{ other: 'field' }, {}]

        const MISSING_URL_RETURN = {
            status: 'error',
            message: 'Missing URL field.',
            error: { code: 'MISSING_URL' },
        }
        invalidValues.forEach((body) => {
            expect(validateUrlBody(body)).toEqual(MISSING_URL_RETURN)
        })
    })

    it('url not string', () => {
        const invalidUrls = [1, [], {}, null, undefined]

        const STRING_REQUIRED_RETURN = {
            status: 'error',
            message: 'URL must be a string.',
            error: { code: 'STRING_REQUIRED' },
        }
        invalidUrls.forEach((url) => {
            expect(validateUrlBody({ url })).toEqual(STRING_REQUIRED_RETURN)
        })
    })

    it('url not valid', () => {
        const invalidUrls = [
            'ftp://example.com',
            'file:///Users/test.txt',
            'mailto:test@example.com',
            'justastring',
            '',
        ]
        const INVALID_URL_RETURN = {
            status: 'error',
            message: 'URL string not valid.',
            error: {
                code: 'INVALID_URL',
                details: 'URL string must be valid and with http or http protocol',
            },
        }
        invalidUrls.forEach((url) => {
            expect(validateUrlBody({ url })).toEqual(INVALID_URL_RETURN)
        })
    })
})
