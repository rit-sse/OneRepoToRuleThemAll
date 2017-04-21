import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from 'api';
import Button from './Button';

class Login extends Component {
  static propTypes = {
    user: PropTypes.object, // eslint-disable-line
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    checkLogin: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.attachClick();
    this.props.checkLogin();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== null && this.props.user === null) {
      this.attachClick();
    }
  }

  attachClick() {
    API.Auth.clientId().then(({ token }) => {
      const auth2 = gapi.auth2.init({
        client_id: token, // eslint-disable-line camelcase
        cookie_policy: 'single_host_origin', // eslint-disable-line camelcase
      });
      auth2.attachClickHandler(
        this.button,
        { prompt: 'select_account' },
        googleUser => this.props.signIn(googleUser),
      );
    }).catch(err => console.log(err)); // eslint-disable-line no-console
  }

  render() {
    return this.props.user ? (
      <Button className={this.props.className} onClick={this.props.signOut}><i className="fa fa-user" /> SignOut</Button>
    ) : <button className={this.props.className} key="loggedin" ref={(c) => { this.button = c; }}><i className="fa fa-user" /> Login</button>;
  }
}

export default Login;
