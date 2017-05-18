import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tags from 'components/qdb/Tags';
import SwipeArea from 'components/general/SwipeArea';
import Actions from 'components/general/Actions';

import 'scss/pane.scss';
import 'scss/actions.scss';

class PendingQuote extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })).isRequired,
    loggedIn: PropTypes.bool.isRequired,
    editItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    approveQuote: PropTypes.func.isRequired,
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
      id,
      body,
      description,
      tags,
      loggedIn,
      editItem,
      deleteItem,
      approveQuote,
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
          >
            <button className="btn btn-small btn-success" onClick={() => approveQuote(id)}>
              <i className="fa fa-rocket" aria-hidden="true" />
            </button>
          </Actions>
        </div>
        <small className="description">{description}</small>
        <Tags tags={tags} link="approval" />
      </SwipeArea>
    );
  }
}

export default PendingQuote;
