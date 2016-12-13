import React, { PureComponent } from 'react';
import './FilterButton.css';

export default class FilterButton extends PureComponent {
  render() {
    const { onClick } = this.props;

    return (
      <div onClick={onClick} className="FilterButton-btn animated bounceIn"/>
    );
  }
}
