const express = require('express');
const router = express.Router();

const {
    achievement
} = require('../constants').api_routes

const AchievementController = require('../controllers/achievementController');

router.get(achievement.get_achievement, AchievementController.getAchievement);
router.post(achievement.post_achievement, AchievementController.postAchievement);

module.exports = router;