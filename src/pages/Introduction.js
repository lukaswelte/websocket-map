import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    const { params } = this.props;

    switch (params.id) {
      case "1":
        return (
          <div>
            First Page
          </div>
        );

      case "2":
        return (
          <div>
            Second Page
          </div>
        );

      case "3":
        return (
          <div>
            Third Page
          </div>
        );

      default:
        return (
          <div>Shouldn't happen - so maybe just redirect to another page ;)</div>
        );
    }
  }
}
