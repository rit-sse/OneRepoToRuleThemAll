import React from 'react';
import PropTypes from 'prop-types';
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
import 'scss/buttons.scss';
import 'scss/page.scss';
import 'scss/qdb.scss';
import qs from 'qs';

const currentFilter = (location) => {
  const tag = qs.parse(location.search.slice(1)).tag || undefined;
  return tag ? (
    <div className="row">
      <div className="col-12">
        <h4 className="currentFilter">
          Current filter:
          <Link to="/qdb/" className="badge badge-primary">
            {tag}
          </Link>
        </h4>
      </div>
    </div>
  ) : null;
};

const QDB = ({ location }) => (
  <div className="container page">
    <div className="row">
      <div className="col-12">
        <Link to="/qdb" className="title-link">
          <h1 className="float-md-left">QDB</h1>
        </Link>
        <div className="actions btn-group float-md-right" style={{ marginTop: '5px' }} role="group" aria-label="Basic example">
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
    {currentFilter(location)}
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
        <Status type={[QUOTES]} spinner />
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
