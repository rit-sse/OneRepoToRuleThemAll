import React, { Component } from 'react';

class GoLink extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor() {
    super();
  }

  render() {
    return (<tr>
      <td>{this.props.name}</td>
      <td>This would be a link...</td>
    </tr>);
  }
}

export default GoLink;
