const mongoose = require('mongoose');
import { isoDateRegex } from '../../js/regularExpressions';

const { Schema } = mongoose;
const schoolQualificationsSchema = new Schema({
    school: { type: String },
    examType: { type: String },
    subject: { type: String },
    grade: { type: String },
    year: {
        from: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"] },
        to: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"] }
    },
    weight: { type: String },
    priority: { type: Number },
    description: { type: String },
});

const SchoolQualifications = mongoose.model("SchoolQualifications", schoolQualificationsSchema);
export { schoolQualificationsSchema, SchoolQualifications };