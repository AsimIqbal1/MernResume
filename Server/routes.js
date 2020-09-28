const {
    api_routes
} = require('./constants')

module.exports = function (app) {
    const education = require('./routes/educationRoute')
    app.use(api_routes.education.end_point, education)

    const experience = require('./routes/experienceRoute')
    app.use(api_routes.experience.end_point, experience)

    const profile = require('./routes/profileRoute')
    app.use(api_routes.profile.end_point, profile)

    const project = require('./routes/projectRoute');
    app.use(api_routes.projects.end_point, project)

    const achievement = require('./routes/achievementRoute')
    app.use(api_routes.achievement.end_point, achievement)

}