import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tags from 'components/qdb/Tags';
import SwipeArea from 'components/general/SwipeArea';
import Actions from 'components/general/Actions';

import 'scss/pane.scss';
import 'scss/actions.scss';

class Quote extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })).isRequired,
    loggedIn: PropTypes.bool.isRequired,
    editItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    description: '',
  };

  state = {
    shown: false,
  };

  showActions = () => {
    this.setState({
      shown: true,
    });
  }

  hideActions = () => {
    this.setState({
      shown: false,
    });
  };

  render() {
    const {
      body,
      description,
      tags,
      loggedIn,
      editItem,
      deleteItem,
    } = this.props;

    const bodyText = body.split(/\r\n|\r|\n/g).map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));

    return (
      <SwipeArea onLeft={this.showActions} onRight={this.hideActions} className="pane quote actions-container">
        <div className="heading">
          <blockquote>{bodyText}</blockquote>
          <Actions
            show={loggedIn}
            shown={this.state.shown}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        </div>
        <small className="description">{description}</small>
        <Tags tags={tags} link="quotes" />
      </SwipeArea>
    );
  }
}

export default Quote;
