import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <footer className="fixed">
        <section className="social_media">
          <ul>
            <li><a href="#">FB</a></li>
            <li><a href="#">TW</a></li>
            <li><a href="#">G+</a></li>
            <li><a href="#">in</a></li>
          </ul>
        </section>
        <section className="switch_page">Next</section>
      </footer>
    );
  }
}

export default Footer;
