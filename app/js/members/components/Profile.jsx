import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import { gravatar } from 'utils/images';

const Callout = styled.span`
  position: absolute;
  right: 15%;
  top: 17.5%;
`;

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
      firstMembership: PropTypes.shape({
        createdAt: PropTypes.string,
      }),
    }).isRequired,
    getUser: PropTypes.func.isRequired,
    signedInUser: PropTypes.shape({
      dce: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {
    user: {},
    signedInUser: {},
  }

  componentDidMount() {
    const { dce, getUser } = this.props;
    getUser(dce);
  }

  render() {
    const {
      dce,
      user,
      signedInUser,
    } = this.props;

    return (
      <div className="row">
        <div className="offset-sm-3 col-sm-6">
          <div className="card text-center">
            {user.createdAt ? (
              <div className="card-body">
                <img src={gravatar(dce)} alt="Member" className="gravatar mb-2" />
                {signedInUser.dce === dce ? <Callout>It{"'"}s you!</Callout> : null}
                <h4>{user.firstName} {user.lastName}</h4>
                <p>{dce}@rit.edu</p>
                {user.officer ? <p>{user.officer.title}</p> : null}
                {user.firstMembership && user.firstMembership.createdAt ? <p>Member Since<br /><span className="font-weight-bold">{moment(user.firstMembership.createdAt).format('MMMM D, YYYY')}</span></p> : null}
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
