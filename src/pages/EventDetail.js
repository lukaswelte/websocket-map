import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { distanceFromLocationToLocationInKm } from '../utilities/geoDistance';
import BringMeButton from '../components/BringMeButton';
import ShareEventButton from '../components/ShareEventButton';
import './EventDetail.css';

class EventDetail extends PureComponent {
  render() {
    const { event, userLocation, onClose } = this.props;

    var distanceToLocation = null;
    if (userLocation) {
      distanceToLocation = distanceFromLocationToLocationInKm(userLocation.lat, userLocation.lng, event.lat, event.lon).toFixed(2);
    }


    return (
      <div onClick={onClose} className="EventDetail-card">
          <div className="EventDetail-close"/>
          <div className="EventDetail-content">
            <h1>{event.title}</h1>
            <h2>{event.localisation}</h2>
            {distanceToLocation ? <h3 style={{color: event.categoryColor}}>{distanceToLocation} km from you</h3> : null}
          </div>
          <BringMeButton style={{bottom:'30px'}} />
          <ShareEventButton />
      </div>
    );
  }
}

const EventDetailContainer = connect(
  (state, ownProps) => ({
    event: state.events[ownProps.params.id],
    userLocation: state.user.location
  }),
  (dispatch) => ({
    onClose: () => dispatch(goBack())
  })
)(EventDetail);

export default EventDetailContainer;
