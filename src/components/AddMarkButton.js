import React, { PureComponent } from 'react';
import './AddMarkButton.css';

export default class AddMarkButton extends PureComponent {
  render() {
    const { onClick, style } = this.props;

    return (
      <div onClick={onClick} style={style} className="AddMarkButton-btn animated bounceIn"/>
    );
  }
}
