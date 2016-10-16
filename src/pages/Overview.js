import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from 'google-map-react';
import { updateLocation } from '../actions/user';
import { goToEvent, goToAddEvent } from '../actions/routing';
import EventMapMarker from '../components/EventMapMarker';
import UserMapMarker from '../components/UserMapMarker';
import AddEventButton from '../components/AddEventButton';
import './Overview.css';

const position = [48.1429561,11.5800083];
class Overview extends Component {
  render() {
    const { events, user, updateUserLocation, usersLocations, children, showEventDetail, showAddEvent } = this.props;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        updateUserLocation(position.coords);
      });
    }

    const onMarkerClick = (key, props) => {
      showEventDetail(key);
    }

    const otherUsersMarkers = usersLocations.map((user, index) => <UserMapMarker key={index} lat={user.location.lat} lng={user.location.lng} />);

    const mapMarkers = events.map((event, index) => <EventMapMarker key={index} lat={event.lat} lng={event.lon} />);

    return (
      <div className="Overview-container">
        {children}
        <Map center={position} zoom={15} onChildClick={onMarkerClick} >
          {mapMarkers}
          {otherUsersMarkers}
          {user.location ? (<UserMapMarker lat={user.location.lat} lng={user.location.lng} />) : null}
        </Map>
        {children ? null: <AddEventButton style={{Bottom:'30px'}} onClick={showAddEvent} />}
      </div>
    );
  }
}

const OverviewContainer = connect(
  (state) => ({
    events: state.events,
    user: state.user,
    usersLocations: state.usersLocations.filter(n => n!==null)
  }),
  (dispatch) => ({
    updateUserLocation: bindActionCreators(updateLocation, dispatch),
    showAddEvent: bindActionCreators(goToAddEvent, dispatch),
    showEventDetail: bindActionCreators(goToEvent, dispatch)
  })
)(Overview);

export default OverviewContainer;
