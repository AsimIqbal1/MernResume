const apiRoutes = {
    education: api_routes.education.end_point,
    experience: api_routes.experience.end_point,
    profile: api_routes.profile.end_point,
    project: api_routes.project.end_point,
    achievement: api_routes.achievement.end_point,
} = require('./constants')

module.exports = function (app) {
    const education = require('./routes/educationRoute')
    app.use(apiRoutes.education, education)

    const experience = require('./routes/experienceRoute')
    app.use(apiRoutes.experience, experience)

    const profile = require('./routes/profileRoute')
    app.use(apiRoutes.profile, profile)

    const project = require('./routes/projectRoute');
    app.use(apiRoutes.projects, project)

    const achievement = require('./routes/achievementRoute')
    app.use(apiRoutes.achievement, achievement)

}