import React, { PureComponent } from 'react';
import './EventMapMarker.css';

export default class EventMapMarker extends PureComponent {
  render() {
    const { title, subtitle, categoryColor, showDetails, onClose } = this.props;

    if (showDetails) {
      return (
        <div className="EventMapMarker-card">
            <div onClick={onClose} className="EventMapMarker-close">
              <div>X</div>
            </div>
            <div className="EventMapMarker-content">
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <h3 style={{color: categoryColor}}>2.5 km from you</h3>
            </div>
        </div>
      )
    }

    return (
      <div className="EventMapMarker-dot"/>
    );
  }
}
