import React, { Component } from 'react';

// COMPONENTS
import Navigation from '../components/global/navigation';
import Footer from '../components/global/footer';

export default class Home extends Component {
  render() {
    return(
      <div>
        <Navigation />
        <h1>Hello from Home</h1>
        <Footer />
      </div>
    )
  }
}
