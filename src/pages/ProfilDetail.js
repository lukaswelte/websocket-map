import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import './ProfilDetail.css';

class EventDetail extends PureComponent {
  render() {
    const { event, onClose } = this.props;

    return (
      <div onClick={onClose} className="ProfilDetail-card">
          <div className="ProfilDetail-close">
            <div>X</div>
          </div>
          <div className="ProfilDetail-monogram"/>
          <div className="ProfilDetail-content">
            <div className="ProfilDetail-name">Annette</div>
            <div className="ProfilDetail-title">You are an enjoyer!</div>
          </div>
          <div className="ProfilDetail-qrcode"/>
      </div>
    );
  }
}

const EventDetailContainer = connect(
  (state, ownProps) => ({
    event: state.events[ownProps.params.id],
  }),
  (dispatch) => ({
    onClose: () => dispatch(goBack())
  })
)(EventDetail);

export default EventDetailContainer;
