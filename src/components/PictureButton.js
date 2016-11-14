import React, { PureComponent } from 'react';
import './PictureButton.css';

export default class PictureButton extends PureComponent {
  render() {
    const { onClick, style } = this.props;

    return (
      <div onClick={onClick} style={style} className="PictureButton-btn"/>
    );
  }
}
