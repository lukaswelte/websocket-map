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

            <div className="ProfilDetail-monogram"/>
            <div className="ProfilDetail-content">
              <div className="ProfilDetail-name">{user.name}</div>
              <div className="ProfilDetail-title">You are an enjoyer!</div>
            </div>
        </div>



        <div className="ProfilDetail-onoffswitch">
          <div className="ProfilDetail-onoffswitch-status">I'm Visible</div>
        </div>

        <div className="ProfilDetail-Subcategory">Me, I<br />& Munich</div>
        <div className="ProfilDetail-shortLine" />
        <div className="ProfilDetail-quote">The journey of a thousand miles<br/>begins with one step.</div>



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


          <div className="ProfilDetail-Subcategory">Poke Nearby<br />Friends</div>
          <div className="ProfilDetail-shortLine" />
          <div className="ProfilDetail-quote">Better together!</div>


          <ul className="ProfilDetail-friends">
            <li style={{backgroundImage:`url(http://www.planwallpaper.com/static/images/cool-pictures-for-computer-backgrounds-hd-wallpaper.jpg)`}}><div className="ProfilDetail-friends-name">Annette</div></li>
            <li className="ProfilDetail-poked" style={{backgroundImage:`url(http://static.tumblr.com/7474abd273a041d0605a64d446d567af/thpelm6/6m5mq42zh/tumblr_static_large.jpg)`}}><div className="ProfilDetail-friends-name">Lukas</div></li>
            <li style={{backgroundImage:`url(http://67.media.tumblr.com/de394579b7ffc341df3b10234af735ab/tumblr_mqwmwmePeG1qao4gno1_1280.jpg?.jpg)`}}><div className="ProfilDetail-friends-name">Vincent</div></li>
            <li className="ProfilDetail-poked" style={{backgroundImage:`url(https://secure.static.tumblr.com/910705d7c2b5a8a27b8904c4b52570a1/i8r11w0/mCyndaom7/tumblr_static_tumblr_static_dpff2po0l5w0s4c0kwo8kc4s4_640.jpg)`}}><div className="ProfilDetail-friends-name">Simon</div></li>
            <li className="ProfilDetail-poked" style={{backgroundImage:`url(http://data.whicdn.com/images/33212668/large.jpg)`}}><div className="ProfilDetail-friends-name">Jonathan</div></li>
            <li style={{backgroundImage:`url(http://www.lovethispic.com/uploaded_images/17497-Cool-Cat.jpg)`}}><div className="ProfilDetail-friends-name">Gotty</div></li>
            <li style={{backgroundImage:`url(http://66.media.tumblr.com/36560e675c0ffb6d50caab6768f4d35b/tumblr_nf1tafTI1K1tclds8o1_1280.jpg)`}}><div className="ProfilDetail-friends-name">Antonia</div></li>
            <li style={{backgroundImage:`url(https://secure.static.tumblr.com/8b2cb800f4163e5f9de9cd43212078e3/cmd59g9/NP7npjbdc/tumblr_static_tumblr_static_a8q51vimf7s4o8ccsgcsww4oc_640.jpg)`}}><div className="ProfilDetail-friends-name">Johannes</div></li>
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

                <ul className="ProfilDetail-footer-infos">
                <div className="ProfilDetail-category-white">Trips</div>
                <div className="ProfilDetail-shortLine" style={{backgroundColor:"rgba(255,255,255,0.3)"}}/>
                  <li>Our Legal Stuffs</li>
                  <li><a href="mailto:hey@blackwall.co">Contact Us</a></li>
                  <li><a href="mailto:jumpin@blackwall.co">Colaborate with us</a></li>
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
