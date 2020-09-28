const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    university: {
        type: String
    },
    gpa:{
        type: Number
    }
});

const Education = mongoose.model('Education', EducationSchema);
module.exports = Education;