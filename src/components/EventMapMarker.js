import React, { PureComponent } from 'react';

export default class EventMapMarker extends PureComponent {
  render() {
    const { title, subtitle, showDetails } = this.props;

    if (showDetails) {
      return (
        <div>
          <h1>{title}</h1>
          <div>{subtitle}</div>
        </div>
      )
    }

    return (
      <div>
        M
      </div>
    );
  }
}
