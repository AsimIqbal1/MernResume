const express = require('express');
const router = express.Router();

const {
    education
} = require('../constants').api_routes

const EducationController = require('../controllers/educationController');

router.get(education.get_education, EducationController.getEducation);
router.post(education.post_education, EducationController.postEducation);

module.exports = router;