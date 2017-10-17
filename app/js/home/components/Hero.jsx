import React from 'react';
import SmoothImageDiv from 'general/components/SmoothImageDiv';
import LabImg from 'img/betterLab.jpg';
import RapDevImg from 'img/rapdev.jpg';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img1Loaded: false,
      img2Loaded: false,
    };
  }

  handleImageLoad = (key) => {
    this.setState({
      [key]: true,
    });
  }

  render() {
    const allLoaded = (this.state.img1Loaded && this.state.img2Loaded);
    return (
      <div className="hero">
        <SmoothImageDiv
          className="hero-img left"
          imageUrl={LabImg}
          delayMs={1200}
          forceLoad={allLoaded}
          onLoad={() => this.handleImageLoad('img1Loaded')}
        />
        <div className="hero-content-container">
          <div className="fancy-hero-container" />
          <div className="hero-content">
            <h3>Weekly Meetings</h3>
            <h6>Thurs @ 4:00pm</h6>
            <h6>GOL-1670</h6>
            <h6>All Are Welcome!</h6>
          </div>
        </div>
        <SmoothImageDiv
          className="hero-img right"
          imageUrl={RapDevImg}
          delayMs={1200}
          forceLoad={allLoaded}
          onLoad={() => this.handleImageLoad('img2Loaded')}
        />
      </div>
    );
  }
}

export default Hero;
