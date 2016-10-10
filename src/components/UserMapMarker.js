import React, { PureComponent } from 'react';

export default class UserMapMarker extends PureComponent {
  render() {

    const { color } = this.props;
    const backgroundColor = color || 'blue';

    return (
      <div className="User-dot"/>
    );
  }
}
