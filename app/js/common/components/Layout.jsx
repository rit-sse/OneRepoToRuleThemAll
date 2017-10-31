import React from 'react';
import PropTypes from 'prop-types';
import SSENav from 'common/containers/SSENav';

import 'scss/footer.scss';

const Layout = props => (
  <div>
    <SSENav />
    {props.children}
    <footer className="sse-footer">All content is Copyright © 2017 Society of Software Engineers.</footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
