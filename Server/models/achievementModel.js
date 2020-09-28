const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
    description: {
        type: String
    }
});

const Achievement = mongoose.model('Achievement', AchievementSchema);
module.exports = Achievement;