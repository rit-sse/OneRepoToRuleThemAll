import React, { Component, PropTypes } from 'react';

class List extends Component {
  static propTypes = {
    item: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemProps: PropTypes.object, // eslint-disable-line
    loggedIn: PropTypes.bool,
    getItems: PropTypes.func.isRequired,
    editItem: PropTypes.func,
    deleteItem: PropTypes.func,
    scroll: PropTypes.bool,
    scrollDone: PropTypes.bool,
    wrapper: PropTypes.string.isRequired,
    wrapperProps: PropTypes.object, // eslint-disable-line
    keyPriority: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    scroll: false,
    scrollDone: true,
    loggedIn: false,
    editItem() {},
    deleteItem() {},
    wrapper: 'div',
    wrapperProps: {},
    keyPriority: ['id', 'name'],
  }

  constructor() {
    super();

    this.checkScroll = this.checkScroll.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.checkHeight = this.checkHeight.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
    if (this.props.scroll && !this.props.scrollDone) {
      window.addEventListener('scroll', this.checkScroll);
      this.checkHeight();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.scrollDone) window.removeEventListener('scroll', this.checkScroll);
    if (prevProps.scrollDone && !this.props.scrollDone) window.addEventListener('scroll', this.checkScroll);
    if (!this.props.scrollDone) this.checkHeight();
  }

  componentWillUnMount() {
    if (this.props.scroll) window.removeEventListener('scroll', this.checkScroll);
  }

  checkScroll() {
    if (((window.innerHeight + window.scrollY) + 25) >= document.body.offsetHeight) {
      this.props.getItems(true); // Make this get the next pagination
    }
  }

  checkHeight() {
    setTimeout(() => {
      if ((document.body.clientHeight < document.body.scrollHeight) && !this.props.scrollDone) {
        this.props.getItems(true);
      }
    }, 100);
  }

  renderItems() {
    const {
      items,
      keyPriority,
      itemProps,
      loggedIn,
      editItem,
      deleteItem,
      item: Item,
    } = this.props;

    return items.map((item) => {
      const key = keyPriority.filter(i => !!item[i]);
      return (
        <Item
          key={item[key[0]]}
          {...item}
          {...itemProps}
          loggedIn={loggedIn}
          editItem={editItem.bind(null, item.id)}
          deleteItem={deleteItem.bind(null, item.id)}
        />
      );
    });
  }

  render() {
    const {
      wrapper,
      wrapperProps,
    } = this.props;

    return React.createElement(wrapper, wrapperProps, this.renderItems());
  }

}

export default List;
