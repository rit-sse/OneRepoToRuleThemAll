import React, { Component } from 'react';

class List extends Component {
  static propTypes = {
    item: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    getItems: React.PropTypes.func.isRequired,
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
      <this.props.item key={item.id} {...item} />
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
