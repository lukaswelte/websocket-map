import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToTrip, goToImprint, goToMap } from '../actions/routing';
import { logout } from '../actions/user';
import { fetchUser } from '../actions/user';
import LegalButton from '../components/LegalButton';
import LogoutButton from '../components/LogoutButton';
import './ProfilDetail.css';

class ProfilDetail extends PureComponent {
  componentWillMount() {
    this.props.updateUser();
  }

  render() {
    const { onClose, showTrip, showImprint, user, logout } = this.props;

    return (
      <div className="ProfilDetail-card">
        <LogoutButton onClick={logout} />
        <div className="ProfilDetail-detail">
            <div className="ProfilDetail-close" onClick={onClose}/>

            <LegalButton onClick={showImprint} />
            <div className="ProfilDetail-monogram"/>
            <div className="ProfilDetail-content">
              <div className="ProfilDetail-name">{user.name}</div>
              <div className="ProfilDetail-title">You are an enjoyer!</div>
            </div>
        </div>



        <div className="ProfilDetail-onoffswitch">
          <div className="ProfilDetail-onoffswitch-status">I'm on Map</div>
        </div>

        <div className="ProfilDetail-Subcategory">You<br />& Munich</div>
        <div className="ProfilDetail-shortLine" />


          <ul className="TripDetail-inspirations">
            <li className="TripDetail-vignette" style={{backgroundImage:`url(http://polpix.sueddeutsche.com/polopoly_fs/1.3036241.1466008494!/httpImage/image.jpg_gen/derivatives/900x600/image.jpg)`}}>
              <div className="TripDetail-todo">Corleone</div>
            </li>
            <li className="TripDetail-vignette" style={{backgroundImage:`url(http://www.mux.de/images/1500x1200z/object/56/1154643156/bergwolf-2.JPG)`}}>
              <div className="TripDetail-todo">Bergwolf and the other stuff</div>
            </li>
            <li className="TripDetail-vignette" style={{width:"91vw",backgroundImage:`url(http://www.cotidiano.de/content/neu_09.jpg)`}}>
              <div className="TripDetail-todo">Cotidiano</div>
            </li>
            <li className="TripDetail-vignette" style={{backgroundImage:`url(http://www.merkur.de/bilder/2014/04/29/3517737/1738912804-003_platz_bodmer_20140429-165845-1yNG.jpg)`}}>
              <div className="TripDetail-done">✌</div>
            </li>
            <li className="TripDetail-vignette" style={{backgroundImage:`url(http://mntns.urspcl.com/wp-content/uploads/2015/12/DSC_2377-Edit.jpg)`}}>
              <div className="TripDetail-todo">Hofgarten Grass</div>
            </li>
            <li className="TripDetail-vignette" style={{width:"91vw",backgroundImage:`url(http://iloveleo.ch/cms/wp-content/uploads/2013/03/MG_5853.jpg)`}}>
              <div className="TripDetail-todo">I Love Leo</div>
            </li>
          </ul>



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
    );
  }
}

const ProfilDetailContainer = connect(
  (state, ownProps) => ({
    user: state.user
  }),
  (dispatch) => ({
    showTrip: bindActionCreators(goToTrip, dispatch),
    showImprint: bindActionCreators(goToImprint, dispatch),
    updateUser: bindActionCreators(fetchUser, dispatch),
    logout: bindActionCreators(logout, dispatch),
    onClose: bindActionCreators(goToMap, dispatch),
  })
)(ProfilDetail);

export default ProfilDetailContainer;
