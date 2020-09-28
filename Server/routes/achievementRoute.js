const express = require('express');
const router = express.Router();

const apiRoutes = {
    achievement: api_routes.achievement
} = require('../constants')

const AchievementController = require('../controllers/achievementController');

router.get(apiRoutes.achievement.get_achievement, AchievementController.getAchievement());
router.post(apiRoutes.achievement.post_achievement, AchievementController.postAchievement());

module.exports = router;