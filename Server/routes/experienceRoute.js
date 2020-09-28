const express = require('express');
const router = express.Router();

const {
    experience
} = require('../constants').api_routes

const ExperienceController = require('../controllers/experienceController');

router.get(experience.get_experience, ExperienceController.getExperience());
router.post(experience.post_experience, ExperienceController.postExperience());

module.exports = router;