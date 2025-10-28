import { generateEmptyReport } from './report'
import {
    generateImgReport,
    generateLabelReport,
    generateLanguageReport,
    generateTitleReport,
} from './accessibility/index'

export const analyzeDocument = (document: Document) => {
    const report = generateEmptyReport()

    report.url = document.URL

    // validate language
    const { language, report: langReport } = generateLanguageReport(document)

    report.language = language
    report.report = [...report.report, ...langReport]

    // validate title
    const { title, report: titleReport } = generateTitleReport(document)

    report.title = title
    report.report = [...report.report, ...titleReport]

    // validate images
    const { report: imageReport } = generateImgReport(document)

    report.report = [...report.report, ...imageReport]

    // validate label
    const { report: labelReport } = generateLabelReport(document)

    report.report = [...report.report, ...labelReport]

    return report
}
