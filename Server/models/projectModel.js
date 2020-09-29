const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description: {
        type: String
    },
    start_date: {
        type: String
    },
    end_date:{
        type: String
    }
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;