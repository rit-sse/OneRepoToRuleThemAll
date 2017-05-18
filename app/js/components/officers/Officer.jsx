import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gravatar } from 'utils/images';
import SwipeArea from 'components/general/SwipeArea';
import Actions from 'components/general/Actions';

class Officer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastname: PropTypes.string,
      image: PropTypes.string,
      dce: PropTypes.string,
    }).isRequired,
    editItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    showActions: PropTypes.bool,
  };

  static defaultProps = {
    showActions: false,
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
      title,
      user,
      email,
      editItem,
      deleteItem,
      showActions,
    } = this.props;
    const { firstName, lastName, image, dce } = user || {};
    const emailAlias = `${email}@sse.rit.edu`;

    return (
      <SwipeArea onLeft={this.showActions} onRight={this.hideActions} className="actions-container col-sm-6 col-lg-4 pb-3">
        <div className="media">
          <img className="mr-3" src={gravatar(dce, image)} alt="Officer" height={80} />
          <div className="d-flex align-self-center flex-column media-body">
            <h5 className="mb-0">{title}</h5>
            <p className="m-0">
              {firstName} {lastName}
            </p>
            <p className="m-0">
              <a href={`mailto:${emailAlias}`}>
                {emailAlias}
              </a>
            </p>
          </div>
          <Actions
            show={showActions}
            shown={this.state.shown}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        </div>
      </SwipeArea>
    );
  }
}

export default Officer;
