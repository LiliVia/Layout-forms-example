import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="fixed">
        <section className="social_media">
          <ul>
            <li><a href="#"><i className="fab fa-facebook-square"></i>FB</a></li>
            <li><a href="#"><i className="fab fa-twitter-square"></i>TW</a></li>
            <li><a href="#"><i className="fab fa-google-plus-square"></i>G+</a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i>in</a></li>
          </ul>
        </section>
        <section className="switch_page">Next</section>
      </footer>
    );
  }
}

export default Footer;
