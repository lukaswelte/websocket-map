import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { goBack } from '../actions/routing';
import PictureButton from '../components/PictureButton';
import AutoresizeTextarea from '../components/AutoresizeTextarea';
import { starLocation } from '../actions/starredLocations';
import './AddMark.css';

class AddMark extends Component {

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
      <div className="AddMark-card" style={{backgroundImage:``, backgroundSize:`cover`, backgroundPosition: 'center center'}}>
          <Helmet title="Add Mark" />
          <div className="AddMark-icon" />
          <div className="AddMark-map-view" onClick={onClose}>
            <div className="AddMark-close"/>
          </div>
          <form onSubmit={handleSubmit} className="AddMark-form">
            <div className="AddMark-content">
              <PictureButton />

              <AutoresizeTextarea type="text" onChange={handleDescriptionChange} className="AddMark-comment" placeholder="What's happening here?" />
              <AutoresizeTextarea type="text" onChange={handleDescriptionChange} className="AddMark-localisation-name" placeholder="Where are you?" />
              <div className="AddMark-leftover" onChange={handleDescriptionChange}>200</div>
              {enableSubmit && <button type="submit" className="AddMark-sendButton" />}
            </div>

          </form>
      </div>
    );
  }
}

const AddMarkContainer = connect(
  (state, ownProps) => ({
    currentUserLocation: state.user.location
  }),
  (dispatch) => ({
    onClose: bindActionCreators(goBack, dispatch),
    addStarredLocation: bindActionCreators(starLocation, dispatch),
  })
)(AddMark);

export default AddMarkContainer;
