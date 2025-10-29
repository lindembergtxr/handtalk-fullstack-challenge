type Tag = 'html' | 'title' | 'img' | 'input'

export interface ReportItem {
    testGroup: string
    testCase: string
    situation: 'success' | 'fail'
    code: string
    selector: Tag | null
    description: string[]
}

export interface AccessibilityReport {
    url: string
    title: string
    language: string
    createdAt: string
    report: ReportItem[]
}
