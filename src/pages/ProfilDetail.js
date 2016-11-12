import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from 'react-router-redux';
import { goToTrip, goToImprint } from '../actions/routing';
import './ProfilDetail.css';

class ProfilDetail extends PureComponent {
  render() {
    const { onClose, showTrip, showImprint } = this.props;

    return (
      <div className="ProfilDetail-card">
        <div className="ProfilDetail-detail">
            <div className="ProfilDetail-close" onClick={onClose}/>
            <div className="ProfileDetail-imprint" onClick={showImprint}>
              Our Legal <br />Stuffs
            </div>
            <div className="ProfilDetail-monogram"/>
            <div className="ProfilDetail-content">
              <div className="ProfilDetail-name">Annette</div>
              <div className="ProfilDetail-title">You are an enjoyer!</div>

              <div className="ProfilDetail-collect">
                You collected
              </div>
              <div className="ProfilDetail-nbr">200</div>
              <div className="ProfilDetail-graph"><div className="ProfilDetail-rock"/></div>
                  <br /><br />

                  <br /><br />
                <div className="ProfilDetail-collect">
                  3 City s trips in preparation
                 </div>
                <ul className="ProfilDetail-CityTrips">
                  <li onClick={showTrip}>Munich</li>
                  <li onClick={showTrip}>Paris</li>
                  <li onClick={showTrip}>Mexico</li>
                </ul>
            </div>
        </div>

        <div className="ProfilDetail-Wishlist">
            <div className="ProfilDetail-category">Trips</div>
            <div className="ProfilDetail-shortLine" />
            <div className="ProfilDetail-quote">The journey of a thousand miles<br/>begins with one step.</div>
            <ul className="ProfilDetail-TripsDetail">
              <li onClick={showTrip} style={{backgroundImage:`url(http://www.dronestagr.am/wp-content/uploads/2015/05/DJI00792.jpg)`}}>
                <div className="ProfilDetail-vignette">
                Munich <sup>DE</sup><br/>
                <div className="ProfilDetail-normal">10 inspirations</div>
                </div>
              </li>
              <li onClick={showTrip} style={{backgroundImage:`url(http://www.airport-orly.com/images/paris-tour-eiffel-at-night.jpg)`}}>
                <div className="ProfilDetail-vignette">
                Paris <sup>FR</sup><br/>
                <div className="ProfilDetail-normal">54 inspirations</div>
                </div>
              </li>
              <li onClick={showTrip} style={{backgroundImage:`url(http://resources.touropia.com/gfx/d/awesome-beaches-around-the-world/tulum.jpg)`}}>
                <div className="ProfilDetail-vignette">
                Tulum <sup>MX</sup><br/>
                <div className="ProfilDetail-normal">34 inspirations</div>
                </div>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

const ProfilDetailContainer = connect(
  (state, ownProps) => ({}),
  (dispatch) => ({
    showTrip: bindActionCreators(goToTrip, dispatch),
    showImprint: bindActionCreators(goToImprint, dispatch),
    onClose: () => dispatch(goBack())
  })
)(ProfilDetail);

export default ProfilDetailContainer;
