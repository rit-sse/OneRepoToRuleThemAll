import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gravatar } from 'utils/images';
import SwipeArea from 'common/components/SwipeArea';
import Actions from 'common/components/Actions';

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
    const emailAlias = `${dce}@rit.edu`;

    return (
      <SwipeArea onLeft={this.showActions} onRight={this.hideActions} className="actions-container-fade col-sm-6 col-lg-3 pb-3">
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
