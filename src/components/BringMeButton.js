import React, { PureComponent } from 'react';
import './BringMeButton.css';

export default class BringMeButton extends PureComponent {
  render() {
    const { onClick, style } = this.props;

    return (
      <div onClick={onClick} style={style} className="BringMeButton-btn"/>
    );
  }
}
