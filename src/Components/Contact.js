import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnimation: false
    };
  }

  componentDidMount() {
    this.animationTimeout = setTimeout(() => {
      this.setState({ showAnimation: true });
    }, 200);
  }

  componentWillUnmount() {
    clearTimeout(this.animationTimeout);
  }

  render() {
    const { showAnimation } = this.state;

    return (
      <div className={`contact-container ${showAnimation ? 'fade-in' : ''}`}>
        <h2>Contact</h2>
          <p className="contact-message">
            Looking forward to hearing from you!
          </p>
        <div className='my-5'>
          <div className="contact-info">
            <p>Linkedin: <a href='https://www.linkedin.com/in/mohit-gorakhapuriya/'>Mohit Gorakhapuriya</a></p>
            <p>Email: mohitgorakhapuriya29@gmail.com</p>
            <p>Phone: +917899339541</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
