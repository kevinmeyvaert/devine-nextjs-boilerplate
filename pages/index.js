import React from 'react';
import Navigation from '../components/Navigation';

export default class extends React.Component {
  // meer info over lifecycle en server/client behavior
  // te vinden op https://github.com/zeit/next.js#fetching-data-and-component-lifecycle
  static async getInitialProps ({req}) {
    return req
      ? {userAgent: req.headers[`user-agent`]}
      : {userAgent: navigator.userAgent};
  }
  render () {
    return (
    <div>
      <Navigation />
      Hallo nerdy Deviner!
    </div>
    );
  }
}
