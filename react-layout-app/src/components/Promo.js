import React, { Component } from 'react';


class Promo extends Component {
  render() {
    return (
      <div className="Promo">
        <div className="content">
          <div className={`subcontent ${this.props.name}`}>
            <h1>{this.props.header}</h1>
            <p>{this.props.paragr}</p>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Promo;
