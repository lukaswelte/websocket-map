import React, { PureComponent } from 'react';
import './LegalButton.css';

export default class LegalButton extends PureComponent {
  render() {
    const { onClick } = this.props;

    return (
      <div onClick={onClick} className="LegalButton-btn">
      Our Legal <br />Stuffs
      </div>
    );
  }
}
