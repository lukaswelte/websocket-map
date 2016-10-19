import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import Helmet from 'react-helmet';
import { distanceFromLocationToLocationInKm } from '../utilities/geoDistance';
import BringMeButton from '../components/BringMeButton';
import ShareEventMenu from '../components/ShareEventMenu';
import './EventDetail.css';

class EventDetail extends PureComponent {
  render() {
    const { event, userLocation, onClose } = this.props;

    var distanceToLocation = null;
    if (userLocation) {
      distanceToLocation = distanceFromLocationToLocationInKm(userLocation.lat, userLocation.lng, event.lat, event.lon).toFixed(2);
    }

    const directionsToLocation = () => {
      const googleMapURL = `https://www.google.com/maps/dir/Current+Location/${event.lat},${event.lon}`;
      const appleMapsURL = `http://maps.apple.com/?daddr=${event.lat},${event.lon}`;

      const userAgent = navigator.userAgent;
      if (userAgent.indexOf("Chrome") === -1 && userAgent.indexOf("Safari") !== -1) {
        // it is a safari browser so open Apple maps
        window.open(appleMapsURL, '_blank');
      } else {
        window.open(googleMapURL, '_blank');
      }
    }

    const shareText = `I'm going to ${event.localisation}, do you wanna join? Join me at `;

    return (
      <div
        onClick={onClose}
        className="EventDetail-card"
        style={{backgroundImage:`url(${event.picture})`, backgroundSize:`cover`, backgroundPosition: 'center center'}}>
          <Helmet
            title={`Event ${event.title}`}
            meta={[
                {"name": "title", "content": `Event at ${event.localisation}`},
                {"name": "description", "content": event.title},
                {"property": "og:type", "content": "website"}
            ]}
          />
          <div className="EventDetail-close"/>
          <div className="EventDetail-content">
            <h1>{event.title}</h1>
            <h2>{event.localisation}</h2>
            {distanceToLocation ? <h3 style={{color: event.categoryColor}}>{distanceToLocation}km from you</h3> : null}
          </div>
          <BringMeButton onClick={directionsToLocation} style={{bottom:'30px'}} />
          <div onClick={(e) => e.stopPropagation()}>
            <ShareEventMenu shareText={shareText} />
          </div>
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
