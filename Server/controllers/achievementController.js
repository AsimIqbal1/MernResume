const Achievement = require('../models/achievementModel');

module.exports = {
    getAchievement: async (req, res, next) => {
        try{
            const achievement = await Achievement.find({}).lean();
            if(achievement){
                return res.status(200).json({
                    achievement: achievement
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
    postAchievement: async (req, res, next) => {
        try {
            let postJSON = {
                description: req.body.description
            }

            const achievement = new Achievement(postJSON);
            let result = await achievement.save();
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
    }, 
}