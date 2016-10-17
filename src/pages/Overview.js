import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from 'google-map-react';
import { updateLocation } from '../actions/user';
import { goToEvent, goToAddEvent, goToProfile } from '../actions/routing';
import EventMapMarker from '../components/EventMapMarker';
import UserMapMarker from '../components/UserMapMarker';
import LoginMapButton from '../components/LoginMapButton';
import AddEventButton from '../components/AddEventButton';
import './Overview.css';

const defaultPosition = {lat: 48.1429561, lng: 11.5800083};
class Overview extends Component {

  constructor(props) {
    super(props);

    this.oldUserLocation = props.user.location;
    this.initialMapCenter = this.oldUserLocation ? this.oldUserLocation : defaultPosition;
    this.state = {
      userInteractedWithMap: false,
      mapCenter: this.initialMapCenter
    };
  }

  componentWillReceiveProps(newProps) {
    const newUserLocation = newProps.user.location;
    const isUserPositionNew = newUserLocation && this.oldUserLocation && newUserLocation.lat.toFixed(3) !== this.oldUserLocation.lat.toFixed(3) && newUserLocation.lng.toFixed(3) !== this.oldUserLocation.lng.toFixed(3);
    const wasUserLocationNeverSet = newUserLocation && !this.oldUserLocation;
    if ((!this.state.userInteractedWithMap && isUserPositionNew) || wasUserLocationNeverSet) {
      // update the center of the map if the user did not interact with the map yet or if the user location was never set before
      this.oldUserLocation = newUserLocation;
      this.setState({
        mapCenter: newUserLocation
      });
    }
  }

  render() {
    const { events, user, updateUserLocation, usersLocations, children, showEventDetail, showAddEvent, showProfile } = this.props;

    const { mapCenter } = this.state;

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

    const mapChanged = (obj) => {
      const center = obj.center;
      const didInteract = this.initialMapCenter.lat.toFixed(3) !== center.lat.toFixed(3) && this.initialMapCenter.lng.toFixed(3) !== center.lng.toFixed(3);
      this.setState({
        userInteractedWithMap: didInteract,
        mapCenter: center
      });
    }

    return (
      <div className="Overview-container">
        {children}
        <Map center={mapCenter} zoom={15} onChange={mapChanged} onChildClick={onMarkerClick} >
          {mapMarkers}
          {otherUsersMarkers}
          {user.location ? (<UserMapMarker lat={user.location.lat} lng={user.location.lng} />) : null}
        </Map>
        {children ? null: <AddEventButton onClick={showAddEvent} />}
        {children ? null: <LoginMapButton onClick={showProfile} />}
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
    showProfile: bindActionCreators(goToProfile, dispatch),
    showEventDetail: bindActionCreators(goToEvent, dispatch)
  })
)(Overview);

export default OverviewContainer;
