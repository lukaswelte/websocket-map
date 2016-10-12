import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EventDetail.css';

class EventDetail extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className="EventDetail-container">
        test
        {event.title}
      </div>
    );
  }
}

const EventDetailContainer = connect(
  (state) => ({
    event: state.events[2],
    user: state.user
  })
)(EventDetail);

export default EventDetailContainer;
