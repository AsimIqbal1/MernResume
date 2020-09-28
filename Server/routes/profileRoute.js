const express = require('express');
const router = express.Router();

const {
    profile
} = require('../constants').api_routes

const ProfileController = require('../controllers/profileController');

router.get(profile.get_profile, ProfileController.getProfile());
router.post(profile.post_profile, ProfileController.postProfile());

module.exports = router;