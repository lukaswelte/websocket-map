import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from 'react-router-redux';
import Helmet from 'react-helmet';
import { distanceFromLocationToLocationInKm } from '../utilities/geoDistance';
import { favoriteMark, unFavoriteMark } from '../actions/marks';
import BringMeButton from '../components/BringMeButton';
import FavoriteMarkButton from '../components/FavoriteMarkButton';
import ShareEventMenu from '../components/ShareEventMenu';
import './MarkDetail.css';

class MarkDetail extends PureComponent {
  render() {
    const { mark, isFavorite, favoriteMark, unFavoriteMark, userLocation, onClose } = this.props;

    if (!mark) {
      return (
        <div>Loading...</div>
      );
    }

    const favButtonClicked = (e) => {
      e.stopPropagation();

      if (isFavorite) {
        unFavoriteMark(mark.id);
      } else {
        favoriteMark(mark.id);
      }
    }

    var distanceToLocation = null;
    if (userLocation) {
      distanceToLocation = distanceFromLocationToLocationInKm(userLocation.lat, userLocation.lng, mark.location.latitude, mark.location.longitude).toFixed(2);
    }

    const directionsToLocation = () => {
      const googleMapURL = `https://www.google.com/maps/dir/Current+Location/${mark.location.latitude},${mark.location.longitude}`;
      const appleMapsURL = `http://maps.apple.com/?daddr=${mark.location.latitude},${mark.location.longitude}`;

      const userAgent = navigator.userAgent;
      if (userAgent.indexOf("Chrome") === -1 && (userAgent.indexOf("Safari") !== -1 || userAgent.indexOf("iPhone") !== -1)) {
        // it is a safari browser so open Apple maps
        if (navigator.standalone) {
          window.open(appleMapsURL);
        } else {
          window.open(appleMapsURL, '_blank');
        }
      } else {
        window.open(googleMapURL, '_blank');
      }
    }

    const shareText = `I'm going to ${mark.locationTitle}, wanna join? @ `;

    return (
      <div
        onClick={onClose}
        className="MarkDetail-card"
        style={{backgroundImage:`url(${mark.picture})`, backgroundSize:`cover`, backgroundPosition: 'center center'}}>
          <Helmet
            title={`Event ${mark.title}`}
            meta={[
                {"name": "title", "content": `Event at ${mark.locationTitle}`},
                {"name": "description", "content": mark.title},
                {"property": "og:type", "content": "website"}
            ]}
          />
          <div className="MarkDetail-close"/>
          <div className="MarkDetail-autor">@AutorName</div>
          <div className="MarkDetail-content">
            <h1>{mark.title}</h1>
            <h2>{mark.locationTitle}</h2>
            {distanceToLocation ? <h3>{distanceToLocation}km from you</h3> : null}
          </div>
          <BringMeButton onClick={directionsToLocation} style={{bottom:'30px'}} />
          <div onClick={(e) => e.stopPropagation()}>
            <ShareEventMenu shareText={shareText} />
          </div>
          <FavoriteMarkButton onClick={favButtonClicked} isFavorite={isFavorite} />
      </div>
    );
  }
}

const MarkDetailContainer = connect(
  (state, ownProps) => ({
    mark: state.marks.find(mark => mark.id === ownProps.params.id),
    userLocation: state.user.location,
    isFavorite: state.favoriteMarks.includes(ownProps.params.id)
  }),
  (dispatch) => ({
    onClose: bindActionCreators(goBack, dispatch),
    favoriteMark: bindActionCreators(favoriteMark, dispatch),
    unFavoriteMark: bindActionCreators(unFavoriteMark, dispatch)
  })
)(MarkDetail);

export default MarkDetailContainer;
