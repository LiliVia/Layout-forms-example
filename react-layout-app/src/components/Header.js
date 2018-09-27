import React, { Component } from 'react';
import List from './List';


import './Header.css';

const mainNav = ["Home", "About us", "News", "Contacts"];

class Header extends Component {

  handleSearch(e) {

  }

  handleChange(e) {

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
              list={mainNav}
              type="nav"
              className="item_menu btn"
            />
          </nav>
          <form className="global_search" onSubmit={this.handleSearch}>
            <input type="text" name="search_text" onChange={this.handleChange} placeholder="Search..." />
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
