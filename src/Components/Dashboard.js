import React, { Component } from 'react'
import myProfile from '../images/profile.png'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="profile">
                    <div className="profile-content">
                        <div className="image-container">
                            {/* Your profile image */}
                            <img
                                className="profile-image"
                                src={myProfile}
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
                                <div className="button my-3">
                                    {/* Buttons */}
                                    <button className="btn btn-outline-primary btn-lg rounded-pill mx-2">
                                        <Link className="nav-link fs-5" aria-current="page" to="resume">
                                            Resume
                                        </Link>
                                    </button>
                                    <button className="btn btn-outline-success btn-lg rounded-pill mx-2">
                                        <Link className="nav-link fs-5" to="projects">
                                            Projects
                                        </Link>
                                    </button>
                                    <button className="btn btn-outline-info btn-lg rounded-pill">
                                        <Link className="nav-link fs-5" to="contact">
                                            Contact
                                        </Link>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
