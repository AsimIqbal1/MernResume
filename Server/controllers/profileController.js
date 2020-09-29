const Profile = require('../models/profileModel');

module.exports = {
    getProfile: async (req, res, next) => {
        try{
            const profile = await Profile.find({}).lean();
            if(profile){
                return res.status(200).json({
                    profile: profile
                })
            }else{
                return res.status(400).json({
                    error: "Something went wrong"
                })
            }
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    },
    postProfile: async (req, res, next) => {
        try {
            let postJSON = {
                person_name: req.body.person_name,
                location: req.body.location,
                number: req.body.number,
                email: req.body.email,
                courses: req.body.courses,
                programming_languages: req.body.programming_languages,
                databases: req.body.databases,
                development: req.body.development,
                design: req.body.design,
                interest: req.body.interest,
                objective: req.body.objective,
                github: req.body.github,
                linkedIn: req.body.linkedIn
            }

            const profile = new Profile(postJSON);
            let result = await profile.save();
            if (result) {
                return res.status(200).json({
                    result: result
                })
            }else{
                return res.status(400).json({
                    error: "Something went wrong"
                })
            }
        } catch (error) {
            return res.status(400).json({
                error: error.message
            })
        }
    }
}