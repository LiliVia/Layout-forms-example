import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer class="fixed">
        <section class="social_media">
          <ul>
            <li><a href="#"><i class="fab fa-facebook-square"></i>FB</a></li>
            <li><a href="#"><i class="fab fa-twitter-square"></i>TW</a></li>
            <li><a href="#"><i class="fab fa-google-plus-square"></i>G+</a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i>in</a></li>
          </ul>
        </section>
        <section class="switch_page"><i class="fas fa-arrow-down"></i>Next</section>
      </footer>
    );
  }
}

export default Footer;
