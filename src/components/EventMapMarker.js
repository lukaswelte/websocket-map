import React, { PureComponent } from 'react';
import './EventMapMarker.css';

export default class EventMapMarker extends PureComponent {
  render() {
    const { title, subtitle, showDetails } = this.props;

    if (showDetails) {
      return (
        <div className="EventMapMarker-card">
          <div className="EventMapMarker-tap"/>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
      )
    }

    return (
      <div className="EventMapMarker-dot"/>
    );
  }
}
