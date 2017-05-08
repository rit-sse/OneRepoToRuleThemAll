import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tags from 'components/qdb/Tags';
import SwipeArea from 'components/general/SwipeArea';

import 'scss/pane.scss';

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
      <SwipeArea onLeft={this.showActions} onRight={this.hideActions} className="pane quote">
        <div className="heading">
          <blockquote>{bodyText}</blockquote>
          { loggedIn ? (
            <div className={this.state.shown ? 'actions shown' : 'actions'}>
              <button className="btn btn-small btn-info" onClick={editItem}><i className="fa fa-pencil" aria-hidden="true" /> Edit</button>
              <button className="btn btn-small btn-danger" onClick={deleteItem}><i className="fa fa-trash-o" aria-hidden="true" /> Delete</button>
            </div>
          ) : null }
        </div>
        <small className="description">{description}</small>
        <Tags tags={tags} link="quotes" />
      </SwipeArea>
    );
  }
}

export default Quote;
