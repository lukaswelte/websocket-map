import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from 'google-map-react';
import Helmet from 'react-helmet';
import { updateLocation } from '../actions/user';
import { fetchMarks } from '../actions/marks';
import { goToMark, goToAddMark, goToProfile, goToFilter } from '../actions/routing';
import MarkMapMarker from '../components/MarkMapMarker';
import UserMapMarker from '../components/UserMapMarker';
import LoginMapButton from '../components/LoginMapButton';
import FilterButton from '../components/FilterButton';
import AddMarkButton from '../components/AddMarkButton';
import StarredLocationMarker from '../components/StarredLocationMarker';
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

  componentWillMount() {
    this.props.updateMarks();
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
    const {
      marks,
      user,
      updateUserLocation,
      usersLocations,
      children,
      showMarkDetail,
      showAddMark,
      showProfile,
      showFilter,
      starredLocations
    } = this.props;

    const { mapCenter } = this.state;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        updateUserLocation(position.coords);
      });
    }

    const onMarkerClick = (key) => {
      if (key.startsWith('MarkMapMarker')) {
        showMarkDetail(key.replace('MarkMapMarker', ''));
      }
    }

    const otherUsersMarkers = usersLocations.map((user, index) => <UserMapMarker key={'UserMapMarker'+index} lat={user.location.lat} lng={user.location.lng} />);

    const mapMarkers = marks.map((mark) => <MarkMapMarker key={'MarkMapMarker'+mark.id} lat={mark.location.latitude} lng={mark.location.longitude} />);

    const starredLocationMarkers = starredLocations.map((location, index) => <StarredLocationMarker key={'StarredLocationMarker'+index} location={location} lat={location.location.lat} lng={location.location.lng} />);

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
        <Helmet title="Map" />
        {children}
        <Map center={mapCenter} zoom={19} onChange={mapChanged} onChildClick={onMarkerClick} >
          {starredLocationMarkers}
          {mapMarkers}
          {otherUsersMarkers}
          {user.location ? (<UserMapMarker lat={user.location.lat} lng={user.location.lng} />) : null}
        </Map>
        {children ? null: <AddMarkButton style={{bottom:'30px'}} onClick={showAddMark} />}
        {children ? null: <LoginMapButton onClick={showProfile} />}
        {children ? null: <FilterButton onClick={showFilter} />}
      </div>
    );
  }
}

const OverviewContainer = connect(
  (state) => ({
    marks: state.marks,
    user: state.user,
    starredLocations: state.starredLocations,
    usersLocations: state.usersLocations.filter(n => n!==null)
  }),
  (dispatch) => ({
    updateUserLocation: bindActionCreators(updateLocation, dispatch),
    showAddMark: bindActionCreators(goToAddMark, dispatch),
    showProfile: bindActionCreators(goToProfile, dispatch),
    showFilter: bindActionCreators(goToFilter, dispatch),
    showMarkDetail: bindActionCreators(goToMark, dispatch),
    updateMarks: bindActionCreators(fetchMarks, dispatch)
  })
)(Overview);

export default OverviewContainer;
