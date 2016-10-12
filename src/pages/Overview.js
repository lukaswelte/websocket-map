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
    const { events, user, updateUserLocation, usersLocations, children } = this.props;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('position', position.coords);
        updateUserLocation(position.coords);
      });
    }

    const onMarkerClick = (key, props) => {
      this.setState({activeMarker: this.state.activeMarker === key ? null : key});
    }

    const resetMarker = () => {
      this.setState({activeMarker: null});
    }

    const otherUsersMarkers = usersLocations.map((user, index) => <UserMapMarker key={index} lat={user.location.lat} lng={user.location.lng} />);

    const mapMarkers = events.map((event) => <EventMapMarker key={event.title} lat={event.lat} lng={event.lon} title={event.title} subtitle={event.baseline} categoryColor={event.color} showDetails={event.title === this.state.activeMarker} />);

    const activeMarker = events.filter((event) => event.title === this.state.activeMarker).map((event) => <EventMapMarker key={event.title} lat={event.lat} lng={event.lon} title={event.title} categoryColor={event.color} subtitle={event.baseline} showDetails={true} />);

    return (
      <div className="Overview-container">
        {children}
        {activeMarker}
        <Map center={position} zoom={15} onChildClick={onMarkerClick} onChildMouseLeave={resetMarker}>
          {mapMarkers}
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
