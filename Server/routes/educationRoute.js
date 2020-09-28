const express = require('express');
const router = express.Router();

const EducationController = require('../controllers/educationController');

router.get('/', EducationController.getEducation());