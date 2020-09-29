const Education = require('../models/educationModel');

module.exports = {
    getEducation: async (req, res, next) => {
        try{
            const education = await Education.find({}).lean();
            if(education){
                return res.status(200).json({
                    education: education
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
    postEducation: async (req, res, next) => {
        try {
            let postJSON = {
                university: req.body.university,
                gpa: req.body.gpa
            }

            const education = new Education(postJSON);
            let result = await education.save();
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