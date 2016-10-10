import React, { PureComponent } from 'react';

export default class UserMapMarker extends PureComponent {
  render() {

    const { color } = this.props;
    const backgroundColor = color || 'blue';

    return (
      <div style={{width: '20px', height: '20px', backgroundColor: backgroundColor, borderRadius: '10px'}} />
    );
  }
}
