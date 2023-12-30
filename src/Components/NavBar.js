import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary mx-4">
                    <div className="container-fluid">
                        <Link className="navbar-brand fs-1" to="MyPortfolio"><strong>{this.props.title}</strong></Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link fs-5" aria-current="page" to="resume">
                                        Resume
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5" to="projects">
                                        Projects
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5" to="contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
