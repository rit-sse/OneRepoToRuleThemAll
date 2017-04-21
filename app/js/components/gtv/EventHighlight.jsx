import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class EventHighlight extends Component {
  static propTypes = {
    event: PropTypes.object, // eslint-disable-line
    nextEvent: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.nextEvent();
  }

  onLoad = (event) => {
    const img = event.target;
    const theImage = new Image();
    theImage.src = img.getAttribute('src');
    if (Math.abs((theImage.height / theImage.width) - (img.height / img.width)) >= 0.001) {
      img.style.width = 'auto';
      img.style.height = '100%';
    }
  }

  dateString = () => {
    if (this.props.event) {
      return `${moment(this.props.event.startDate).format('MMMM D, h:mm a')} @ ${this.props.event.location}`;
    }
    return '';
  }

  imageUrl = () => {
    if (this.props.event) {
      return this.props.event.image;
    }
    return '';
  }

  render() {
    return (
      <section className="gtv-container" style={{ position: 'relative' }}>

        <div className="gtv_img_container">
          <img className="center gtv-event-highlight" src={this.imageUrl()} alt="Event" id="main_image" onLoad={this.onLoad} />
        </div>

        <div className="gtv-highlight-footer">
          <h3 className="center">{ this.props.event.name }</h3>
          <h3 className="center">{ this.dateString() }</h3>
        </div>
      </section>
    );
  }
}

export default EventHighlight;
