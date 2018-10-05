import React from 'react';
import PropTypes from 'prop-types';
import SSENav from 'common/containers/SSENav';

import 'scss/footer.scss';

// get the current year so we can output the copyright notice
const copyrightDate = new Date().getFullYear();

const Layout = props => (
  <div>
    <SSENav />
    {props.children}
    <footer className="sse-footer">All content is Copyright © {copyrightDate} Society of Software Engineers. SHA: {process.env.__gitSHA__}</footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
