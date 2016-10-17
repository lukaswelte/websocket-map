import React, { PureComponent } from 'react';
import './AddEventButton.css';

export default class AddEventButton extends PureComponent {
  render() {
    const { onClick, style } = this.props;

    return (
      <div onClick={onClick} style={style} className="AddEventButton-btn"/>
    );
  }
}
