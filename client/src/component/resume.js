import React from 'react';

export default class resume extends React.Component{
    state = {
        loading: true,
        education: null,
        profile: null,
        project: null,
        achievement: null,
        experience: null
    }

    async componentDidMount(){
        //call your APIs here
        const educationURL = "http://localhost:5000/api/education/";
        const profileUrl = "http://localhost:5000/api/profile/";
        const projectURL = "http://localhost:5000/api/project/";
        const achievementURL = "http://localhost:5000/api/achievement/";
        const experienceURL = "http://localhost:5000/api/experience/";

        let education = await fetch(educationURL);
        education = await education.json();

        let profile = await fetch(profileUrl);
        profile = await profile.json();

        let project = await fetch(projectURL);
        project = await project.json();

        let achievement = await fetch(achievementURL);
        achievement = await achievement.json();

        let experience = await fetch(experienceURL);
        experience = await experience.json();

        this.setState({
            education: education,
            profile: profile,
            project: project,
            achievement: achievement,
            experience: experience,
            loading: false
        }, () => {
            console.log(this.state.profile.profile[0])
        })

        
        
    }

    render(){
        return (
            <div>
                {this.state.loading? <div>loading....</div> : <div>{this.state.profile.profile[0].person_name}</div>}
            </div>
        )
    }
}