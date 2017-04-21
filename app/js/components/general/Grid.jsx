import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';

export default class Grid extends Component {
  static propTypes = {
    item: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    itemProps: PropTypes.object, // eslint-disable-line
    rowWrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    rowProps: PropTypes.object, // eslint-disable-line
    getItems: PropTypes.func,
    editItem: PropTypes.func,
    deleteItem: PropTypes.func,
    gridWrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    gridProps: PropTypes.object, // eslint-disable-line
    itemKeyPriority: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    itemProps: {},
    rowWrapper: 'div',
    rowProps: {},
    getItems() {},
    editItem() {},
    deleteItem() {},
    gridWrapper: 'div',
    gridProps: {},
    itemKeyPriority: ['id', 'name'],
  };

  componentDidMount() {
    this.props.getItems();
  }

  renderRows = () => {
    const {
      items,
      itemProps,
      editItem,
      deleteItem,
      item,
      rowWrapper,
      rowProps,
      itemKeyPriority,
    } = this.props;

    return items.map((itemList, i) => (
      <List
        key={i}
        items={itemList}
        item={item}
        itemProps={itemProps}
        editItem={editItem}
        deleteItem={deleteItem}
        wrapper={rowWrapper}
        wrapperProps={rowProps}
        keyPriority={itemKeyPriority}
      />
    ));
  };

  render() {
    const {
      gridWrapper,
      gridProps,
    } = this.props;

    return React.createElement(gridWrapper, gridProps, this.renderRows());
  }

}
