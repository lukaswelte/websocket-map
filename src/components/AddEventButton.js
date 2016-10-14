import React, { PureComponent } from 'react';
import './AddEventButton.css';

export default class AddEventButton extends PureComponent {
  render() {
    const { onClick } = this.props;

    return (
      <div onClick={onClick} className="AddEventButton-btn"/>
    );
  }
}
