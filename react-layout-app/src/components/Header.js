import React, { Component } from 'react';
import List from './List';


import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainNav: ["Home", "About us", "News", "Contacts"]
    };
  }
  render() {
    return (
      <header className="fixed">
        <div className="logo">
          <h1>Collider</h1>
        </div>
        <div className="container">
          <nav className="main_menu">
            <List
              list={this.state.mainNav}
              type="nav"
              className="item_menu btn"
            />
          </nav>
          <form className="global_search">
            <input type="text" name="search_text" id="search_text" placeholder="Search" />
            <button type="button" name="search_button" id="search_button" value="search"> <i className="fab fa-sistrix"></i>
            </button>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
