const Project = require('../models/projectModel');

module.exports = {
    getProject: async (req, res, next) => {
        try{
            const project = await Project.find({}).lean();
            if(project){
                return res.status(200).json({
                    project: project
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
    postProject: async (req, res, next) => {
        try {
            let postJSON = {
                name: req.body.name,
                description: req.body.description,
                start_date: req.body.start_date,
                end_date: req.body.end_date
            }

            const project = new Project(postJSON);
            let result = await project.save();
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