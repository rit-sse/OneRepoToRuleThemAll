import React, { Component } from 'react';
import { injectAsyncReducer } from 'store';

// Credit: https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
export default (getComponent, reducers = [], names = []) => (
  class AsyncComponent extends Component {

    static component = null; // sets to prototype
    state = { component: AsyncComponent.component, error: false };

    componentDidMount() {
      if (!this.state.component) {
        Promise.all(reducers.map(r => r()))
          .then(asyncReducers => asyncReducers.map(a => a.default))
          .then(asyncReducers => asyncReducers.forEach((reducer, index) => injectAsyncReducer(names[index], reducer)))
          .then(() => getComponent())
          .then(component => component.default) // unwrap the default
          .then((component) => {
            AsyncComponent.component = component; // perm sets component on prototype
            this.setState({ component });
          })
          .catch((e) => {
            if (process.env.NODE_ENV === 'development') { // log errors in dev
              console.error(e); // eslint-disable-line
            }
            this.setState({
              error: 'Somthing went wrong!',
            });
          });
      }
    }

    render() {
      if (this.state.error) return <div>{this.state.error}</div>;
      if (this.state.component) return <this.state.component {...this.props} />;
      return (
        <div className="row">
          <div className="col-12">
            <i className="fa fa-spinner fa-3x fa-spin" style={{ margin: '0 auto', display: 'block', width: '45px' }} />
          </div>
        </div>
      );
    }
  }
);
