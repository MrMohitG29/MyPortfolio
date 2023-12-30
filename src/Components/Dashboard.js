import React, { Component } from 'react'
import myProfile from '../images/profile.png'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard mt-5">
                <div className="profile">
                    <div className="profile-content">
                        <div className="image-container">
                            <img
                                className="profile-image"
                                src={myProfile} // Replace with your image URL
                                alt="Profile"
                            />
                        </div>
                        <div className="details">
                            <span className='hello'>Hello</span>
                            <h3 className='mt-3'><strong>A Bit About Me</strong></h3>
                            <div className='description'>
                                <p className="description">
                                    Accomplished Full Stack Developer with extensive experience in designing and implementing dynamic web applications using a diverse range of technologies, frameworks, and programming languages.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
