import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import './TripDetail.css';

class TripDetail extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div onClick={onClose} className="TripDetail-card">
          <div className="TripDetail-close"/>
          <div className="TripDetail-category">Munich <sup>DE</sup></div>
          <div className="TripDetail-shortLine" />
          <div className="TripDetail-quote">
            Hi / Hallo<br/>
            A beer / Ein Helles, bitte!<br/>
            Where is... / Wo ist...</div>

            <div className="TripDetail-Subcategory">Your Selection</div>
            <div className="TripDetail-shortLine" />

            <ul className="TripDetail-inspirations">
              <li className="TripDetail-vignette" style={{backgroundImage:`url(http://polpix.sueddeutsche.com/polopoly_fs/1.3036241.1466008494!/httpImage/image.jpg_gen/derivatives/900x600/image.jpg)`}}>
                Corleone
              </li>
              <li className="TripDetail-vignette" style={{backgroundImage:`url(http://www.mux.de/images/1500x1200z/object/56/1154643156/bergwolf-2.JPG)`}}>
                Bergwolf and the other stuff
              </li>
              <li className="TripDetail-vignette" style={{width:"87vw",backgroundImage:`url(http://www.cotidiano.de/content/neu_09.jpg)`}}>
                Cotidiano
              </li>
              <li className="TripDetail-vignette" style={{backgroundImage:`url(http://www.merkur.de/bilder/2014/04/29/3517737/1738912804-003_platz_bodmer_20140429-165845-1yNG.jpg)`}}>
                Gartnerplatz
              </li>
              <li className="TripDetail-vignette" style={{backgroundImage:`url(http://mntns.urspcl.com/wp-content/uploads/2015/12/DSC_2377-Edit.jpg)`}}>
                Hofgarten Grass
              </li>
              <li className="TripDetail-vignette" style={{width:"87vw",backgroundImage:`url(http://iloveleo.ch/cms/wp-content/uploads/2013/03/MG_5853.jpg)`}}>
                I Love Leo
              </li>
            </ul>

            <div className="TripDetail-Subcategory">On the Map</div>
            <div className="TripDetail-shortLine" />
            <div className="TripDetail-map" />

            <div className="TripDetail-Subcategory">Better Together</div>
            <div className="TripDetail-shortLine" />
            <ul className="TripDetail-together">
              <li>
                <div className="TripDetail-Friend"/>
                  <div className="TripDetail-Status" />
                  <div className="TripDetail-FriendName">Annette<br/>
                    <div className="TripDetail-FriendStatusOk">Looking forward!</div>
                </div>
              </li>
              <li>
                <div className="TripDetail-Friend"/>
                  <div className="TripDetail-Statuswait" />
                <div className="TripDetail-FriendName">Lukas<br/>
                  <div className="TripDetail-FriendStatus">Pending...</div>
                </div>
              </li>
              <li className="TripDetail-FriendAdd">+</li>
            </ul>



      </div>
    );
  }
}

const TripDetailContainer = connect(
  (state, ownProps) => ({}),
  (dispatch) => ({
    onClose: () => dispatch(goBack())
  })
)(TripDetail);

export default TripDetailContainer;
