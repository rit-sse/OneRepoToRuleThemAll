import React, { Component } from 'react';

class List extends Component {
  static propTypes = {
    item: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    loggedIn: React.PropTypes.bool,
    getItems: React.PropTypes.func.isRequired,
    editItem: React.PropTypes.func,
    deleteItem: React.PropTypes.func,
    scroll: React.PropTypes.bool,
    scrollDone: React.PropTypes.bool,
    wrapper: React.PropTypes.string,
  }

  static defaultProps = {
    scroll: false,
    scrollDone: true,
    loggedIn: false,
    editItem: function editItem() {},
    deleteItem: function deleteItem() {},
    wrapper: 'div'
  }

  constructor() {
    super();

    this.checkScroll = this.checkScroll.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
    if (this.props.scroll && !this.props.scrollDone) window.addEventListener('scroll', this.checkScroll);
  }

  componentDidUpdate(prevProps) {
    if (this.props.scrollDone) window.removeEventListener('scroll', this.checkScroll);
    if (prevProps.scrollDone && !this.props.scrollDone) window.addEventListener('scroll', this.checkScroll);
  }

  componentWillUnMount() {
    if (this.props.scroll) window.removeEventListener('scroll', this.checkScroll);
  }

  checkScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.props.getItems(true); // Make this get the next pagination
    }
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
    return React.createElement(this.props.wrapper, {}, this.renderItems());
  }

}

export default List;
