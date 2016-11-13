import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { goBack } from '../actions/routing';
import PictureButton from '../components/PictureButton';
import { starLocation } from '../actions/starredLocations';
import './AddEvent.css';

class AddEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventDescription: ""
    };
  }

  render() {
    const { onClose, addStarredLocation, currentUserLocation } = this.props;

    const { eventDescription } = this.state;

    const enableSubmit = eventDescription !== "";

    const handleSubmit = (event) => {
      event.preventDefault();
      if (enableSubmit) {
        addStarredLocation(eventDescription, currentUserLocation);
        onClose();
      }
    }

    const handleDescriptionChange = (event) => {
      this.setState({
        eventDescription: event.target.value
      });
    }

    return (
      <div className="AddEvent-card" style={{backgroundImage:``, backgroundSize:`cover`, backgroundPosition: 'center center'}}>
          <Helmet title="Add Event" />
          <div className="AddEvent-icon" />
          <div onClick={onClose} className="AddEvent-close"/>
          <form onSubmit={handleSubmit} className="AddEvent-form">
            <div className="AddEvent-content">
            <PictureButton />

                <textarea type="text" onChange={handleDescriptionChange} className="AddEvent-input" rows="1" placeholder="What's happening here?" />
                <div className="AddEvent-leftover">200</div>
            </div>
            <button type="submit" className={enableSubmit ? "AddEvent-valid" : ""} />
          </form>
      </div>
    );
  }
}

const AddEventContainer = connect(
  (state, ownProps) => ({
    currentUserLocation: state.user.location
  }),
  (dispatch) => ({
    onClose: bindActionCreators(goBack, dispatch),
    addStarredLocation: bindActionCreators(starLocation, dispatch),
  })
)(AddEvent);

export default AddEventContainer;
