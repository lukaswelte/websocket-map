import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import './EventDetail.css';

class EventDetail extends PureComponent {
  render() {
    const { event, onClose } = this.props;

    return (
      <div onClick={onClose} className="EventDetail-card">
          <div className="EventDetail-close"/> 
          <div className="EventDetail-content">
            <h1>{event.title}</h1>
            <h2>{event.subtitle}</h2>
            <h3 style={{color: event.categoryColor}}>2.5 km from you</h3>
          </div>
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
