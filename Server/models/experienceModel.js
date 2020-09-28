const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    company_name: {
        type: String
    },
    designation: {
        type: String
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    job_description: {
        type: String
    }
});

const Experience = mongoose.model('Experience', ExperienceSchema);
module.exports = Experience;