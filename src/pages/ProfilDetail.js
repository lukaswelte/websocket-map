import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import './ProfilDetail.css';

class ProfilDetail extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div onClick={onClose} className="ProfilDetail-card">
          <div className="ProfilDetail-close"/>
          <div className="ProfilDetail-monogram"/>
          <div className="ProfilDetail-content">
            <div className="ProfilDetail-name">Annette</div>
            <div className="ProfilDetail-title">You are an enjoyer!</div>
              <div className="ProfilDetail-collect">
                You collected
              </div>
              <div className="ProfilDetail-nbr">200</div>
              <div className="ProfilDetail-graph"><div className="ProfilDetail-rock"/></div>
          </div>
          <div className="ProfilDetail-qrcode"/>
          <div className="ProfilDetail-title" style={{color:"rgba(255, 255, 255, .6)"}}>Invit the squad!</div>
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
