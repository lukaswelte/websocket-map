import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from 'google-map-react';
import { updateLocation } from '../actions/user';
import EventMapMarker from '../components/EventMapMarker';
import UserMapMarker from '../components/UserMapMarker';
import './Overview.css';

const position = [48.1429561,11.5800083];
class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMarker: null
    };
  }

  render() {
    const { events, user, updateUserLocation, usersLocations } = this.props;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('position', position.coords);
        updateUserLocation(position.coords);
      });
    }

    const onMarkerClick = (key, props) => {
      this.setState({activeMarker: this.state.activeMarker === key ? null : key});
    }

    const otherUsersMarkers = usersLocations.map((user, index) => <UserMapMarker key={index} lat={user.location.lat} lng={user.location.lng} color="orange" />);

    const MapMarkers = events.map((event) => <EventMapMarker key={event.title} lat={event.lat} lng={event.lon} title={event.title} subtitle={event.baseline} showDetails={event.title === this.state.activeMarker} />);

    return (
      <div className="Overview-container">
        <Map center={position} zoom={10} onChildClick={onMarkerClick}>
          {MapMarkers}
          {otherUsersMarkers}
          {user.location ? (<UserMapMarker lat={user.location.lat} lng={user.location.lng} />) : null}
        </Map>
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
    updateUserLocation: bindActionCreators(updateLocation, dispatch)
  })
)(Overview);

export default OverviewContainer;
