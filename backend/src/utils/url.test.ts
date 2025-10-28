import { describe, it, expect } from 'vitest'

import { stringIsAValidHttpUrl } from './url'

describe('stringIsAValidHttpUrl', () => {
    it('should return true for valid http or https URLs', () => {
        expect(stringIsAValidHttpUrl('https://google.com')).toBe(true)
        expect(stringIsAValidHttpUrl('http://example.com')).toBe(true)
        expect(stringIsAValidHttpUrl('http://example.com/path/to/somewhere')).toBe(true)
        expect(stringIsAValidHttpUrl('http://example.com/path/to/somewhere?args=true')).toBe(true)
    })

    it('should return false for unsupported protocols', () => {
        expect(stringIsAValidHttpUrl('ftp://example.com')).toBe(false)
        expect(stringIsAValidHttpUrl('file:///Users/test.txt')).toBe(false)
        expect(stringIsAValidHttpUrl('mailto:test@example.com')).toBe(false)
    })

    it('should return false for invalid strings', () => {
        expect(stringIsAValidHttpUrl('justastring')).toBe(false)
        expect(stringIsAValidHttpUrl('')).toBe(false)
    })
})
