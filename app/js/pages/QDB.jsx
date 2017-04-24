import React from 'react';
import PropTypes from 'prop-types';
import 'scss/buttons.scss';
import { Route, Switch, Link } from 'react-router-dom';
import Login from 'containers/general/Login';
import Status from 'containers/general/Status';
import QuoteList from 'containers/qdb/QuoteList';
import PendingQuoteList from 'containers/qdb/PendingQuoteList';
import CreateButton from 'containers/general/CreateButton';
import { showQuoteModal } from 'actions/modal';
import ControlledLinkButton from 'containers/general/ControlledLinkButton';
import QDBModal from 'containers/qdb/QDBModal';
import { QUOTES } from 'actions/quotes';
import 'scss/page.scss';

const QDB = ({ location }) => (
  <div className="container page">
    <div className="row">
      <div className="col-12">
        <Link to="/qdb" className="title-link">
          <h1 className="pull-left">QDB</h1>
        </Link>
        <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Basic example">
          <CreateButton action={showQuoteModal} className="btn btn-secondary">
            Create Quote
          </CreateButton>
          <ControlledLinkButton path={location.pathname} className="btn btn-secondary" to="/qdb/approval">
            Approve Quotes
          </ControlledLinkButton>
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[QUOTES]} message />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Switch>
          <Route path="/qdb/approval" component={PendingQuoteList} />
          <Route path="/qdb" component={QuoteList} />
        </Switch>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[]} spinner />
      </div>
    </div>
    <QDBModal />
  </div>
);

QDB.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default QDB;
