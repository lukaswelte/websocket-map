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
          <div className="AddEvent-target"/>
          <form onSubmit={onClose} className="AddEvent-form">
            <div className="AddEvent-content">
                <textarea type="text" className="AddEvent-input" rows="5" placeholder="What's happen here?" />
              </div>
            <input type="submit" className="AddEvent-valid" defaultValue=""/>
          </form>
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
