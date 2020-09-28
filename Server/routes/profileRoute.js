const express = require('express');
const router = express.Router();

const apiRoutes = {
    profile: api_routes.profile
} = require('../constants')

const ProfileController = require('../controllers/profileController');

router.get(apiRoutes.profile.get_profile, ProfileController.getProfile());
router.post(apiRoutes.profile.post_profile, ProfileController.postProfile());

module.exports = router;