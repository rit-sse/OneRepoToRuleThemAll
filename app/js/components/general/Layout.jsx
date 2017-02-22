import React from 'react';
import SSENav from 'containers/general/SSENav';

import 'scss/footer.scss';

const Layout = props => (
  <div>
    <SSENav />
    {props.children}
    <footer className="sse-footer">All content is Copyright © 2017 Society of Software Engineers.</footer>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
