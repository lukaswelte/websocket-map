import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from '../actions/routing';
import './AddEvent.css';

class AddEvent extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div className="AddEvent-card">
          <div onClick={onClose} className="EventDetail-close"/>
          <div className="AddEvent-msg-frame">
            <div className="AddEvent-msg">Something happening here?</div>
          </div>
          <div className="AddEvent-valid"/>
      </div>
    );
  }
}

const AddEventContainer = connect(
  (state, ownProps) => ({

  }),
  (dispatch) => ({
    onClose: bindActionCreators(goBack, dispatch),
  })
)(AddEvent);

export default AddEventContainer;
