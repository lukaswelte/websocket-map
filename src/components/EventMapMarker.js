import React, { PureComponent } from 'react';
import './EventMapMarker.css';

export default class EventMapMarker extends PureComponent {
  render() {
    const { title, subtitle, showDetails } = this.props;

    if (showDetails) {
      return (
        <div className="EventMapMarker-card">
            <div className="EventMapMarker-header">
            </div>
            <div className="EventMapMarker-content">
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <h3 style={{color:"#ff285c",}}>2.5Km from you</h3>
            </div>
        </div>
      )
    }

    return (
      <div className="EventMapMarker-dot"/>
    );
  }
}
