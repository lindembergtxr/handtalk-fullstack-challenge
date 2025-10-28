import { AccessibilityReport, ReportItem } from '../adapters/report'

export const generateEmptyReport = (): AccessibilityReport => {
    return {
        url: '',
        title: '',
        language: '',
        createdAt: '',
        report: [],
        metadata: { wordCount: 0, imagesCount: 0, linksCount: 0 },
    } as AccessibilityReport
}

export const generateReportItems = {
    noHTMLTag: (): ReportItem => ({
        testGroup: 'Language of Page',
        testCase: 'Check if html tag exists',
        situation: 'fail',
        code: 'NO_HTML_TAG',
        selector: 'html',
        description: 'No HTML tag found.',
    }),
    noLanguageFound: (): ReportItem => ({
        testGroup: 'Language of Page',
        testCase: 'HTML tag must contain a "lang" attribute',
        situation: 'fail',
        code: 'NO_LANG_FOUND',
        selector: 'html',
        description: 'HTML tag does not contain "lang" attribute.',
    }),
    invalidLangFormat: (str: string): ReportItem => ({
        testGroup: 'Language of Page',
        testCase: 'Lang attribute must be valid',
        situation: 'fail',
        code: 'INVALID_LANG_FORMAT',
        selector: 'html',
        description: `Lang attribute ${str} value not in accordance to ISO 639-1.`,
    }),
    successPageLanguage: (lang: string): ReportItem => ({
        testGroup: 'Language of Page',
        testCase: 'Page lang attribute properly set up',
        situation: 'success',
        code: 'PAGE_LANGUAGE',
        selector: 'html',
        description: `Page "lang" attribute valid! - The page language is "${lang}"`,
    }),
    noTitleTag: (): ReportItem => ({
        testGroup: 'Page title',
        testCase: 'Page must have a title',
        situation: 'fail',
        code: 'NO_TITLE_TAG',
        selector: 'html',
        description: 'No HTML tag found.',
    }),
    emptyTitle: (): ReportItem => ({
        testGroup: 'Page title',
        testCase: 'Title must not be empty',
        situation: 'fail',
        code: 'EMPTY_TITLE',
        selector: 'html',
        description: 'Empty title tag.',
    }),
    successTitle: (title: string): ReportItem => ({
        testGroup: 'Page title',
        testCase: 'Page must have a non-empty title tag',
        situation: 'success',
        code: 'TITLE_TAG',
        selector: 'html',
        description: `Page contains a proper set up title - ${title}.`,
    }),
}
