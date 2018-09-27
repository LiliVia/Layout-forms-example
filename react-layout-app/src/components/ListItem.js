import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    return (
      this.props.type === "nav" ?
        <li><a href="/{this.props.value}">{this.props.value}</a></li> :
        <li>{this.props.value}</li>
    );
  }
}

export default ListItem;