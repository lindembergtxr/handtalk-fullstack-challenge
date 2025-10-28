//https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html
//https://www.w3.org/WAI/WCAG21/Techniques/html/H44

import { generateReportItems } from '../report'

export const generateLabelReport = (document: Document) => {
    const inputList = document.querySelectorAll('input, select, textarea')

    let hasInvalid = false

    const detailedReport: string[] = []

    Array.from(inputList).forEach((input) => {
        const inputId = input.id
        const inputTag = input.tagName

        // label explicit
        if (inputId && document.querySelector(`label[for="${inputId}"]`)) {
            // check if input has a label explicitly linked with it via for attribute
            detailedReport.push(
                `PASSED: Input (${inputTag}) with id=${inputId} is explicitly linked to a label`,
            )
            return
        }

        // label implicit
        if (input.closest('label')) {
            // check if input has a label explicitly linked with it via for attribute
            detailedReport.push(
                inputId
                    ? `PASSED (implicit): Input (${inputTag}) with id=${inputId} is wrapped in a label.`
                    : `PASSED (implicit): Input (${inputTag}) is wrapped in a label.`,
            )
            hasInvalid = true
            return
        }

        // aria
        const ariaLabelledby = input.getAttribute('aria-labelledby')
        const ariaLabel = input.getAttribute('aria-label')

        if (ariaLabelledby || ariaLabel) {
            // checks if input is wrapped in a label element
            detailedReport.push(
                inputId
                    ? `PASSED (aria): Input (${inputTag}) with id=${inputId} has ARIA labeling.`
                    : `PASSED (aria): Input (${inputTag}) has ARIA labeling.`,
            )
            hasInvalid = true
            return
        }

        // fail
        detailedReport.push(
            inputId
                ? `FAILED: Input (${inputTag}) with id=${inputId} has no label.`
                : `FAILED: Input (${inputTag}) has no label.`,
        )
        hasInvalid = true
    })

    const report = hasInvalid
        ? [generateReportItems.someInputNotExplicitlyLabelled(detailedReport)]
        : [generateReportItems.successAllInputsExplicitlyLabelled(detailedReport)]

    return { report }
}
