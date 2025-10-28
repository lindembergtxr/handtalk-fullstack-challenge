import mongoose, { Schema } from 'mongoose'
import { AccessibilityReport } from '../adapters/report'

const reportSchema = new mongoose.Schema({
    url: String,
    title: String,
    language: String,
    createdAt: String,
    report: [
        {
            testGroup: String,
            testCase: String,
            situation: { type: String, enum: ['success', 'fail'] },
            code: String,
            selector: { type: Schema.Types.Mixed, enum: ['html', 'title', 'img', 'input', null] },
            description: [String],
        },
    ],
})

const ReportDB = mongoose.model('Report', reportSchema)

export const saveReport = async (report: AccessibilityReport) => {
    return await ReportDB.create(report)
}
