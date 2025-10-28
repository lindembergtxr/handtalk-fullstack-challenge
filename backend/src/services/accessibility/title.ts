// https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html

import { generateReportItems } from '../report'

export const generateTitleReport = (document: Document) => {
    const title = document.querySelector('title')

    if (!title) {
        return { title: '', report: [generateReportItems.noTitleTag()] }
    }
    const content = title.textContent

    if (!content) {
        return { title: '', report: [generateReportItems.noLanguageFound()] }
    }

    return { title: content, report: [generateReportItems.successTitle(content)] }
}
