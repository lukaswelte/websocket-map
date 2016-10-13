import React, { Component } from 'react';

export default class Login extends Component {
  render() {

    const { params } = this.props;

    switch (params.step) {
      case "1":
        return (
          <div>
            Your name?
          </div>
        );

      case "2":
        return (
          <div>
            Your Mail?
          </div>
        );

      case "3":
        return (
          <div>
            Your code?
          </div>
        );

      default:
        return (
          <div>Shouldn't happen - so maybe just redirect to another page ;)</div>
        );
    }
  }
}
