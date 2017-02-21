import React, { Component } from 'react';

class List extends Component {
  static propTypes = {
    item: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    loggedIn: React.PropTypes.bool,
    getItems: React.PropTypes.func.isRequired,
    editItem: React.PropTypes.func,
    deleteItem: React.PropTypes.func,
  }

  static defaultProps = {
    loggedIn: false,
    editItem: function editItem() {},
    deleteItem: function deleteItem() {},
  }

  constructor() {
    super();

    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
  }

  renderItems() {
    return this.props.items.map(item => (
      <this.props.item
        {...item}
        key={item.id ? item.id : item.name}
        loggedIn={this.props.loggedIn}
        editItem={this.props.editItem.bind(null, item.id)}
        deleteItem={this.props.deleteItem.bind(null, item.id)}
      />
    ));
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }

}

export default List;
