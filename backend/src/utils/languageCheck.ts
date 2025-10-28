export const isValidLanguageTag = (tag: string): boolean => {
    try {
        Intl.getCanonicalLocales(tag)
        return true
    } catch {
        return false
    }
}
