import React, { PureComponent } from 'react';
import './LoginMapButton.css';

export default class LoginMapButton extends PureComponent {
  render() {
    const { onClick } = this.props;

    return (
      <div onClick={onClick} className="LoginMapButton-btn animated bounceIn"/>
    );
  }
}
