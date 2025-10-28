//www.w3.org/WAI/WCAG21/Understanding/images-of-text.html
//www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/

import { generateReportItems } from '../report'

export const generateImgReport = (document: Document) => {
    const images = document.querySelectorAll('img')

    let imageCount = 0
    let invalidCount = 0

    const detailedReport: string[] = []

    if (images.length === 0) {
        return { report: [generateReportItems.successNoImages()] }
    }

    images.forEach((image) => {
        const src = image.getAttribute('src')
        const alt = image.getAttribute('alt')

        if (alt === null) {
            detailedReport.push(`FAILED: <img src="${src}"> has no 'alt' attribute`)
            invalidCount += 1
        } else if (!alt) {
            detailedReport.push(`FAILED: <img src="${src}"> has empty 'alt' attribute`)
            invalidCount += 1
        } else {
            detailedReport.push(`PASSED: <img src="${src}"> contains alt=${alt}`)
        }
        imageCount += 1
    })

    const report =
        invalidCount > 0
            ? [generateReportItems.someImagesWithoutAlt(imageCount, invalidCount, detailedReport)]
            : [generateReportItems.successAllImagesWithAlt(imageCount, detailedReport)]

    return { report }
}
