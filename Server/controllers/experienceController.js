const Experience = require('../models/experienceModel');

module.exports = {
    getExperience: async (req, res, next) => {
        try{
            const experience = await Experience.find({}).lean();
            if(experience){
                return res.status(200).json({
                    experience: experience
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
    postExperience: async (req, res, next) => {
        try {
            let postJSON = {
                company_name: req.body.company_name,
                designation: req.body.designation,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                job_description: req.body.job_description
            }

            const experience = new Experience(postJSON);
            let result = await experience.save();
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