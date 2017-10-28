import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';
import ControlledLinkButton from 'general/containers/ControlledLinkButton';
import CreateButton from 'general/containers/CreateButton';
import { showQuoteModal } from 'general/actions';
import Status from 'general/containers/Status';
import Login from 'general/containers/Login';
import PendingQuoteList from 'qdb/containers/PendingQuoteList';
import QuoteList from 'qdb/containers/QuoteList';
import QDBModal from 'qdb/containers/QDBModal';
import { QUOTES } from 'qdb/actions';

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
          <h2 className="float-left">QDB</h2>
        </Link>
        <div className="clearfix hidden-sm-up" />
        <div className="actions btn-group pb-2 mt-sm-1 float-sm-right" role="group" aria-label="Basic example">
          <CreateButton any action={showQuoteModal} className="btn btn-secondary">
            Create
          </CreateButton>
          <ControlledLinkButton path={location.pathname} className="btn btn-secondary" to="/qdb/approval">
            Approve
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
