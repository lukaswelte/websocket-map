import React, { PureComponent } from 'react';
import './LaterButton.css';

export default class LaterButton extends PureComponent {
  render() {
    const { onClick, color } = this.props;

    return (
      <div onClick={onClick} style={{color:color}} className="LaterButton-btn">
      Skip it<br />for now
      </div>
    );
  }
}
