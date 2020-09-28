const express = require('express');
const router = express.Router();

const {
    project
} = require('../constants').api_routes

const ProjectController = require('../controllers/projectController');

router.get(project.get_project, ProjectController.getProject());
router.post(project.post_project, ProjectController.postProject());

module.exports = router;