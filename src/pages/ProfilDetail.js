import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

class EventDetail extends PureComponent {
  render() {
    const { event, onClose } = this.props;

    return (
      <div onClick={onClose} className="EventDetail-card">
          <div className="EventDetail-close">
            <div>X</div>
          </div>
          <div className="EventDetail-content">
            <h1>Welcome Back User</h1>
            <h2>Small line about you</h2>
            <h3>Something else</h3>
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
