import { URL } from 'url'

const protocols = ['http:', 'https:']

export const stringIsAValidHttpUrl = (str: string) => {
    try {
        const url = new URL(str)

        // url needs to have a protocol
        if (!url.protocol) return false

        // url needs to be http or https
        return protocols.includes(url.protocol)
    } catch {
        return false
    }
}
