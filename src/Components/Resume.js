import React, { Component } from 'react';
import resumeJson from '../resume.json';

export default class Resume extends Component {

  state = {
    showAnimation: false
  };

  componentDidMount() {
    // Trigger the animation after a slight delay for a better effect
    this.animationTimeout = setTimeout(() => {
      this.setState({ showAnimation: true });
    }, 200);
  }

  componentWillUnmount() {
    // Clear the timeout to avoid memory leaks
    clearTimeout(this.animationTimeout);
  }

  render() {
    const { showAnimation } = this.state;

    return (
      <div className={`project-container container my-5 ${showAnimation ? 'fade-in' : ''}`}>
        <span className='resume'>Resume</span>

        <div className='row mt-5'>
          <div className='col-md-5'>
            <h3><strong>Skills & Expertise</strong></h3>
          </div>
          <div className='row col-md-7'>
            {Object.entries(resumeJson.specialized_skills).map(([category, skills], index) => (
              <div className='col-md-6' key={index}>
                <h5>{category.toUpperCase()}</h5>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr></hr>
        <div className='row mt-5'>
          <div className='col-md-5'>
            <h3><strong>Work Experience</strong></h3>
          </div>
          <div className='col-md-7'>
            {resumeJson.experience.map((experience, index) => (
              <div className='row mb-5' key={index}>
                <div className='col-md-3'>
                  <p><strong>{experience.organization}</strong></p>
                  <p><strong>{experience.designation}</strong></p>
                  <strong>{experience.duration}</strong>
                </div>
                <div className='col-md-9'>
                  <ul>
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr></hr>
        <div className='row mt-5'>
          <div className='col-md-5'>
            <h3><strong>Education</strong></h3>
          </div>
          <div className='col-md-7'>
            {resumeJson.education.map((edu, index) => (
              <div className='row mb-5' key={index}>
                <div className='col-md-3'>
                  <p><strong>{edu.organization}</strong></p>
                  <p><strong>{edu.degree}</strong></p>
                  <p><strong>{edu.duration}</strong></p>
                </div>
                <div className='col-md-9'>
                  <ul>
                    {edu.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    );
  }
}
