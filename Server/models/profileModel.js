const mongoose = require('mongoose');

const ProfileModel = new mongoose.Schema({
    person_name:{
        type: String
    },
    location: {
        type: String
    },
    number: {
        type: String
    },
    email: {
        type: String
    },
    courses: {
        type: [String]
    },
    programming_languages: {
        type: [String]
    },
    databases: {
        type: [String]
    },
    development: {
        type: [String]
    },
    design: {
        type: [String]
    },
    interest:{
        type: [String]
    },
    objective: {
        type: String
    }
});

const Profile = mongoose.model('Profile', ProfileModel);
module.exports = Profile;