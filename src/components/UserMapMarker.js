import React, { PureComponent } from 'react';
import './UserMapMarker.css';

export default class UserMapMarker extends PureComponent {
  render() {

    const { color } = this.props;
    const backgroundColor = color || 'blue';

    return (
      <div className="UserMapMarker-dot"/>
    );
  }
}
