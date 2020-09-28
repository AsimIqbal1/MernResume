const express = require('express');
const router = express.Router();

const apiRoutes = {
    education: api_routes.education
} = require('../constants')

const EducationController = require('../controllers/educationController');

router.get(apiRoutes.education.get_education, EducationController.getEducation());
router.post(apiRoutes.education.post_education, EducationController.postEducation());

module.exports = router;