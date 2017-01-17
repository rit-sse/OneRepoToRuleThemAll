import React from 'react';
import { render } from 'react-dom';

if (module.hot) module.hot.accept();

window.onload = () => {
  render(
    <div>Hello World</div>,
    document.getElementById('react'),
  );
};
