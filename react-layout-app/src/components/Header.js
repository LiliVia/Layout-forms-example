import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header class="fixed">
        <div class="logo">
          <h1>Collider</h1>
        </div>
        <div class="container">
          <nav class="main_menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </nav>
          <form class="global_search">
            <input type="text" name="search_text" id="search_text" placeholder="Search" />
            <button type="button" name="search_button" id="search_button" value="search"> <i class="fab fa-sistrix"></i>
            </button>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
