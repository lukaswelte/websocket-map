import React, { PureComponent } from 'react';
import './SaveItButton.css';

export default class SaveItButton extends PureComponent {
  render() {
    const { onClick, style } = this.props;

    return (
      <div onClick={onClick} style={style} className="SaveItButton-btn"/>
    );
  }
}
