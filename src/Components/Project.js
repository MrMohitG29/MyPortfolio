import React, { Component } from 'react';
import projectJson from '../projects.json';
import lisa from "../images/lisa.png";
import quotesClub from "../images/quotesClub.png";
import junkBox from '../images/junkBox.png'

export default class Project extends Component {
  
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

  constructor(props) {
    super(props);
    
    this.imageDict = {
      'ChatBox-Lisa': lisa,
      'QuotesClub': quotesClub,
      'Junkbox': junkBox
    };
  }

  render() {
    const { showAnimation } = this.state;

    return (
      <div className={`project-container container my-5 ${showAnimation ? 'fade-in' : ''}`}>
        <span className='resume'>Projects</span>

        <div className='container mt-5'>
          <h2>Industrial Projects</h2>
          {projectJson.projects.map((pro, index) => (
            <div className='row my-5'>
              <div className='col-md-7'>
                <div className='row' key={index}>
                  <div className='col-lg-3 col-md-6'>
                    <spam><strong>{pro.title}</strong></spam>
                    <p><strong>{pro.employer}</strong></p>
                  </div>
                  <div className='col-md-9'>
                    <ul>
                      {pro.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-5'>
                      <span>Technology</span> : <p>{pro.technology}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-5'>
          <h2>Acadmic Projects</h2>
          {projectJson.acadmicProjects.map((pro, index) => (
            <div className='row my-5'>
              <div className='col-md-7'>
                <div className='row ' key={index}>
                  <div className='col-lg-3 col-md-6'>
                    <spam><strong>{pro.name}</strong></spam>
                    <p><strong>{pro.duration}</strong></p>
                  </div>
                  <div className='col-md-12'>
                    <ul>
                      {pro.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-5'>
                <img className='project-image'
                  src={this.imageDict[pro.name]? this.imageDict[pro.name] :pro.imageUrl} 
                  alt="Profile"
                />
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
