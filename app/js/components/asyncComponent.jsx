import React, { Component } from 'react';

// Credit: https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
export default (getComponent) => {
  return class AsyncComponent extends Component {

    static component = null; // sets to prototype
    state = { component: AsyncComponent.component };

    componentWillMount() {
      if (!this.state.component) {
        getComponent()
          .then(component => component.default) // unwrap the default
          .then((component) => {
            AsyncComponent.component = component; // perm sets component on prototype
            this.setState({ component });
          });
      }
    }

    render() {
      if (this.state.component) return <this.state.component {...this.props} />;
      return (
        <div className="row">
          <div className="col-12">
            <i className="fa fa-spinner fa-3x fa-spin" style={{ margin: '0 auto', display: 'block', width: '45px' }} />
          </div>
        </div>
      );
    }
  };
};
