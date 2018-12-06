import React, { Component } from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* This is the presentation page. */}
        <h1>Phone Shop</h1>
        <h4>Here you can buy phones.</h4>
        <p>
          To start buying, press the link on the right upper corner mentioned as
          "start".
        </p>
      </div>
    );
  }
}
