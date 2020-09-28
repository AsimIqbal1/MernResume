const express = require('express');
const router = express.Router();
const apiRoutes = {
    experience: api_routes.experience
} = require('../constants')

const ExperienceController = require('../controllers/experienceController');

router.get(apiRoutes.experience.get_experience, ExperienceController.getExperience());
router.post(apiRoutes.experience.post_experience, ExperienceController.postExperience());

module.exports = router;