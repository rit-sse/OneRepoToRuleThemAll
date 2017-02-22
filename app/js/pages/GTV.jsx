import React from 'react';
import { TorqueSlides, TorqueSlide } from 'torque-react';

import ColorView from 'components/gtv/ColorView';
import EventPanels from 'containers/gtv/EventPanels';
import EventHighlight from 'containers/gtv/EventHighlight';
import ThreeWeek from 'containers/gtv/ThreeWeek';

const GTV = () => (
  <TorqueSlides duration={30} keyboardInteractive >
    <TorqueSlide>
      <EventPanels />
    </TorqueSlide>
    <TorqueSlide duration={5}>
      <ColorView color="white" />
    </TorqueSlide>
    <TorqueSlide duration={15}>
      <EventHighlight />
    </TorqueSlide>
    <TorqueSlide>
      <ThreeWeek />
    </TorqueSlide>
    <TorqueSlide duration={5}>
      <ColorView color="black" />
    </TorqueSlide>
  </TorqueSlides>
);

export default GTV;
