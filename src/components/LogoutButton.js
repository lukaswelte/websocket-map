import React, { PureComponent } from 'react';
import './LogoutButton.css';

export default class LogoutButton extends PureComponent {
  render() {
    const { onClick, color } = this.props;

    return (
      <div onClick={onClick} className="LogoutButton-btn" />
    );
  }
}
