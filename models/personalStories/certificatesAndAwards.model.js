const mongoose = require('mongoose');
const { isoDateRegex } = require('../../js/regularExpressions');

const { Schema } = mongoose;
const certificatesAndAwardsSchema = new Schema({
    type: { type: String, default: "defaultType" },
    issuer: { type: String, default: "defaultIssuer" },
    award: { type: String, default: "defaultAward" },
    grade: { type: String, default: "defaultGrade" },
    year: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"], default: "2021-12-01T13:20:36.186Z" },
    weight: { type: String, default: "defaultWeight" },
    priority: { type: Number, default: "0" },
    description: { type: String, default: "defaultDescription" },
});

const CertificatesAndAwards = mongoose.model("CertificatesAndAwards", certificatesAndAwardsSchema);
module.exports = { certificatesAndAwardsSchema, CertificatesAndAwards };