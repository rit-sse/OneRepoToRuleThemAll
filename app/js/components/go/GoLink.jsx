import React, { Component } from 'react';

class GoLink extends Component {
  static propTypes = {
    shortLink: React.PropTypes.string.isRequired,
    longLink: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
  }

  render() {
    return (<tr key={this.props.shortLink}>
      <td>
        <a href={`/go/${this.props.shortLink}`}>{this.props.shortLink}</a>
      </td>
      <td>
        <a href={this.props.longLink} target="_blank" rel="noopener noreferrer">{this.props.longLink}</a>
      </td>
      <td>Test Extra</td>
    </tr>);
  }
}

export default GoLink;
