// www.w3.org/WAI/WCAG22/Understanding/language-of-page.html

import { generateReportItems } from '../report'
import { isValidLanguageTag } from '../../utils/languageCheck'

export const generateLanguageReport = (document: Document) => {
    const html = document.querySelector('html')

    if (!html) {
        return { language: 'No "lang" attribute', report: [generateReportItems.noHTMLTag()] }
    }
    const lang = html?.getAttribute('lang')

    if (!lang) {
        return { language: 'No "lang" attribute', report: [generateReportItems.noLanguageFound()] }
    }

    if (!isValidLanguageTag(lang)) {
        return {
            language: 'No "lang" attribute',
            report: [generateReportItems.invalidLangFormat(lang)],
        }
    }
    return {
        language: lang,
        report: [generateReportItems.successPageLanguage(lang)],
    }
}
