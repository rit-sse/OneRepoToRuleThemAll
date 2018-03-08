import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { gravatar } from 'utils/images';

class Profile extends Component {
  static propTypes = {
    dce: PropTypes.string.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      image: PropTypes.string,
      createdAt: PropTypes.string,
      officer: PropTypes.shape({
        title: PropTypes.string,
      }),
    }).isRequired,
    getUser: PropTypes.func.isRequired,
  }

  static defaultProps = {
    user: {},
  }

  componentDidMount() {
    const { dce, getUser } = this.props;
    getUser(dce);
  }

  render() {
    const {
      dce,
      user,
    } = this.props;

    return (
      <div className="row">
        <div className="offset-sm-3 col-sm-6">
          <div className="card text-center">
            {user.createdAt ? (
              <div className="card-body">
                <img src={gravatar(dce)} alt="Member" className="gravatar mb-2" />
                <h4>{user.firstName} {user.lastName}</h4>
                <p>{dce}@rit.edu</p>
                {user.officer ? <p>{user.officer.title}</p> : null}
                <p>Member Since<br /><span className="font-weight-bold">{moment(user.createdAt).format('MMMM D, YYYY')}</span></p>
              </div>
            ) : (
              <div className="card-body">
                <h3>Not Found</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
