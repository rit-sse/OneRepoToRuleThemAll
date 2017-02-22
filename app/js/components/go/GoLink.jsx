import React, { Component } from 'react';

class GoLink extends Component {
  static propTypes = {
    shortLink: React.PropTypes.string.isRequired,
    longLink: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
  }

  constructor() {
    super();
  }

  render() {
    return (<tr key={this.props.shortLink}>
      <td>{this.props.shortLink}</td>
      <td>
        <a href={this.props.longLink} target='_blank'>{this.props.longLink}</a></td>
    </tr>);
  }
}

export default GoLink;
