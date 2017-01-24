import React from 'react';
import API from 'js/api';

class Login extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    signIn: React.PropTypes.func.isRequired,
    signOut: React.PropTypes.func.isRequired,
    className: React.PropTypes.string.isRequired,
  }

  componentDidMount() {
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
    const content = this.props.user ? (
      <div id="profile-dropdown" title={<span><i className="fa fa-user" />&nbsp;{this.props.user.firstName}</span>}>
        <button onClick={this.props.signOut}>SignOut</button>
      </div>
    ) : <p key="loggedin" ref={c => { this.button = c; }}><i className="fa fa-user" /> Login</p>;
    return (
      <div className={this.props.className}>
        {content}
      </div>
    );
  }
}


export default Login;
