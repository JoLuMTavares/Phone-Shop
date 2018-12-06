import React, { Component } from 'react';

import Shopping from './Shopping';

// JSX

class Start extends Component {
  render() {
    return (
      // This imports the "Shopping" component and it's used inside this div
      <div className="main-column">
        <Shopping />
      </div>
    );
  }
}

export default Start;
