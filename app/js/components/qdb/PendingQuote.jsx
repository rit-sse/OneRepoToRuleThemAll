import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tags from 'components/qdb/Tags';
import SwipeArea from 'components/general/SwipeArea';

import 'scss/pane.scss';

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
      <SwipeArea onLeft={this.showActions} onRight={this.hideActions} className="pane quote">
        <div className="heading">
          <blockquote>{bodyText}</blockquote>
          { loggedIn ? (
            <div className={this.state.shown ? 'actions shown' : 'actions'}>
              <button className="btn btn-small btn-success" onClick={() => approveQuote(id)}><i className="fa fa-rocket" aria-hidden="true" /> Approve</button>
              <button className="btn btn-small btn-info" onClick={editItem}><i className="fa fa-pencil" aria-hidden="true" /> Edit</button>
              <button className="btn btn-small btn-danger" onClick={deleteItem}><i className="fa fa-trash-o" aria-hidden="true" /> Delete</button>
            </div>
          ) : null }
        </div>
        <small className="description">{description}</small>
        <Tags tags={tags} link="approval" />
      </SwipeArea>
    );
  }
}

export default PendingQuote;
