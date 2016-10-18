import React, { PureComponent } from 'react';
import './ShareEventButton.css';

export default class ShareEventButton extends PureComponent {
  render() {
    const { onClick, style } = this.props;

    return (
      <div onClick={onClick} style={style} className="ShareEventButton-btn"/>
    );
  }
}
