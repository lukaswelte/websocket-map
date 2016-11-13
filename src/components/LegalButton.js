import React, { PureComponent } from 'react';
import './LegalButton.css';

export default class LegalButton extends PureComponent {
  render() {
    const { onClick, color } = this.props;

    return (
      <div onClick={onClick} style={{color:{color}}} className="LegalButton-btn">
      Our Legal <br />Stuffs
      </div>
    );
  }
}
