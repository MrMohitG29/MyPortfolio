import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h5>Phone</h5>
                            <p>+91 7899339541</p>
                        </div>
                        <div className="col-lg-3">
                            <h5>Email</h5>
                            <p>mohitgorakhapuriya29@gmail.com</p>
                        </div>
                        <div className="col-lg-3">
                            <h5>LinkedIn</h5>
                            <p><a href="https://www.linkedin.com/in/mohit-gorakhapuriya/" target="_blank" rel="noopener noreferrer">
                                LinkedIn Profile
                            </a></p>
                        </div>
                        <div className="col-lg-3">
                            <p className="text-muted">&copy; 2023 Mohit Gorakhapuriya</p>
                        </div>
                    </div>
                </div>
            </footer>


        )
    }
}
