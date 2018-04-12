import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortPredicate } from '../../utils/sortOfficers';

class List extends Component {
  static propTypes = {
    item: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    defaultItems: PropTypes.arrayOf(PropTypes.object),
    itemProps: PropTypes.object, // eslint-disable-line
    itemDispatch: PropTypes.object, // eslint-disable-line
    getItems: PropTypes.func,
    viewItem: PropTypes.func,
    editItem: PropTypes.func,
    deleteItem: PropTypes.func,
    scroll: PropTypes.bool,
    scrollDone: PropTypes.bool,
    wrapper: PropTypes.string,
    wrapperProps: PropTypes.object, // eslint-disable-line
    keyPriority: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node,
    forceGetItems: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    defaultItems: [],
    scroll: false,
    scrollDone: true,
    itemProps: {},
    itemDispatch: {},
    viewItem() {},
    editItem() {},
    deleteItem() {},
    getItems() {},
    wrapper: 'div',
    wrapperProps: {},
    keyPriority: ['id', 'name'],
    children: null,
    forceGetItems: false,
  }

  componentDidMount() {
    if (this.props.items.length === 0 || this.props.forceGetItems) {
      this.props.getItems();
    }
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

  checkScroll = () => {
    if (((window.innerHeight + window.scrollY) + 25) >= document.body.offsetHeight) {
      this.props.getItems(true); // Make this get the next pagination
    }
  };

  checkHeight = () => {
    setTimeout(() => {
      if ((document.body.clientHeight < document.body.scrollHeight) && !this.props.scrollDone) {
        this.props.getItems(true);
      }
    }, 100);
  };

  renderItems = () => {
    const {
      items,
      defaultItems,
      keyPriority,
      itemProps,
      itemDispatch,
      viewItem,
      editItem,
      deleteItem,
      item: Item,
    } = this.props;

    const allItems = [...defaultItems, ...items].sort(sortPredicate);

    return allItems.map((item) => {
      const key = item[keyPriority.filter(i => !!item[i])[0]];
      return (
        <Item
          key={key}
          {...item}
          {...itemProps}
          {...itemDispatch}
          viewItem={() => viewItem(key)}
          editItem={() => editItem(key)}
          deleteItem={() => deleteItem(key)}
        />
      );
    });
  };

  render() {
    const {
      wrapper,
      children,
      wrapperProps,
    } = this.props;

    return React.createElement(wrapper, wrapperProps, [children, this.renderItems()]);
  }
}

export default List;
