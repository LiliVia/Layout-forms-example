import React, { Component } from 'react';
import ListItem from './ListItem';


class List extends Component {

  render() {
    const items = this.props.list;
    const type = this.props.type;
    return (
      <ul>
        {items.map((item) => <ListItem key={"item-" + item} value={item} type={type} />)}
      </ul>
    )
  }
}

export default List;