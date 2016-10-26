import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import './ProfilDetail.css';

class ProfilDetail extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div className="ProfilDetail-card">
        <div className="ProfilDetail-detail">
            <div className="ProfilDetail-close" onClick={onClose}/>
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
                <div className="ProfilDetail-collect">
                  3 City s trips in preparation
                 </div>
                <ul className="ProfilDetail-CityTrips">
                  <li>Munich</li>
                  <li>Paris</li>
                  <li>Mexico</li>
                </ul>
            </div>
        </div>

        <div className="ProfilDetail-Wishlist">
            <div className="ProfilDetail-category">Trips</div>
            <div className="ProfilDetail-shortLine" />
            <ul className="ProfilDetail-TripsDetail">
              <li style={{backgroundImage:`url(http://www.dronestagr.am/wp-content/uploads/2015/05/DJI00792.jpg)`}}>
                <div className="ProfilDetail-vignette">
                Munich <sup>DE</sup><br/>
                <div className="ProfilDetail-normal">10 inspirations</div>
                </div>
              </li>
              <li style={{backgroundImage:`url(http://www.airport-orly.com/images/paris-tour-eiffel-at-night.jpg)`}}>
                <div className="ProfilDetail-vignette">
                Paris <sup>FR</sup><br/>
                <div className="ProfilDetail-normal">54 inspirations</div>
                </div>
              </li>
              <li style={{backgroundImage:`url(http://resources.touropia.com/gfx/d/awesome-beaches-around-the-world/tulum.jpg)`}}>
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
    onClose: () => dispatch(goBack())
  })
)(ProfilDetail);

export default ProfilDetailContainer;
