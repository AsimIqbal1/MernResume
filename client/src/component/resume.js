import React from 'react';
import '../css/resume.css'
export default class resume extends React.Component {
    state = {
        loading: true,
        education: null,
        profile: null,
        project: null,
        achievement: null,
        experience: null
    }

    async componentDidMount() {
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
            console.log(this.state)
        })



    }

    render() {
        if (this.state.loading) {
            return (
                <div>Loading..</div>
            )
        }
        const databases = this.state.profile.profile[0].databases.map((database) => <li>{database}</li>)
        const developments = this.state.profile.profile[0].development.map((development) => <li>{development}</li>)
        const designs = this.state.profile.profile[0].design.map((design) => <li>{design}</li>)
        const languages = this.state.profile.profile[0].programming_languages.map((pl) => <li>{pl}</li>)

        return (
            <div id="wrapper">
                <div className="wrapper-mid">
                    <div id="paper">
                        <div id="paper-mid">
                            <div className="entry">
                                <div className="self" style={{marginLeft: '70px'}}>
                                    <h1 className="name">{this.state.profile.profile[0].person_name}<br />
                                        <span style={{ marginTop: '15px' }}>MERN Developer</span></h1>
                                    <ul>
                                        <li className="ad">{this.state.profile.profile[0].location}</li>
                                        <li className="mail">{this.state.profile.profile[0].email}</li>
                                        <li className="tel">{this.state.profile.profile[0].number}</li>
                                        <li className="web"><a src={this.state.profile.profile[0].linkedIn}>{this.state.profile.profile[0].linkedIn}</a></li>
                                        <li className="web" style={{ marginTop: '15px' }}><a src={this.state.profile.profile[0].github}>{this.state.profile.profile[0].github}</a></li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className="entry">
                                <h2>OBJECTIVE</h2>
                                <p>{this.state.profile.profile[0].objective}</p>
                            </div>
                            <div className="entry">
                                <h2>EDUCATION</h2>
                                <div className="content">
                                    <h3>GPA: {this.state.education.education[0].gpa}</h3>
                                    <p>{this.state.education.education[0].university}<br />
                                        <em>Bachelors in Software Engineering</em></p>
                                </div>
                            </div>
                            <div className="entry">
                                <h2>EXPERIENCE</h2>
                                <div className="content">
                                    <h3>{this.state.experience.experience[0].start_date} - {this.state.experience.experience[0].end_date}</h3>
                                    <p>{this.state.experience.experience[0].company_name}<br />
                                        <em>{this.state.experience.experience[0].designation}</em></p>
                                    <ul className="info">
                                        <li>{this.state.experience.experience[0].job_description}</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>{this.state.experience.experience[1].start_date} - {this.state.experience.experience[1].end_date}</h3>
                                    <p>{this.state.experience.experience[1].company_name} <br />
                                        <em>{this.state.experience.experience[1].designation}</em></p>
                                    <ul className="info">
                                        <li>{this.state.experience.experience[1].job_description}.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="entry">
                                <h2>SKILLS</h2>
                                <div className="content">
                                    <h3>Software Knowledge</h3>
                                    <ul className="skills">
                                        {databases}
                                        {developments}
                                        {designs}

                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>Languages</h3>
                                    <ul className="skills">
                                        {languages}
                                    </ul>
                                </div>
                            </div>
                            <div className="entry">
                                <h2>PROJECTS</h2>
                                <div className="content">
                                    <h3>{this.state.project.project[0].start_date} - {this.state.project.project[0].end_date}</h3>
                                    <p>{this.state.project.project[0].name}</p>
                                    <ul className="info">
                                        <li>{this.state.project.project[0].description}</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>{this.state.project.project[1].start_date} - {this.state.project.project[1].end_date}</h3>
                                    <p>{this.state.project.project[1].name}</p>
                                    <ul className="info">
                                        <li>{this.state.project.project[1].description}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className="paper-bottom"></div>
                    </div>
                </div>
            </div>

        )
    }
}
