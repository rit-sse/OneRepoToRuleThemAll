import React from 'react';
import Login from '../containers/Login';

const Layout = props => (
  <div>
    <h2>Layout</h2>
    <Login className="meme" />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
