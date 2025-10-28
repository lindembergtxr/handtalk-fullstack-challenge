import { generateEmptyReport } from './report'
import { generateLanguageReport, generateTitleReport } from './accessibility/index'

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

    return report
}
