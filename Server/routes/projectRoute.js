const express = require('express');
const router = express.Router();

const apiRoutes = {
    project: api_routes.project
} = require('../constants')

const ProjectController = require('../controllers/projectController');

router.get(apiRoutes.project.get_project, ProjectController.getProject());
router.post(apiRoutes.project.post_project, ProjectController.postProject());

module.exports = router;