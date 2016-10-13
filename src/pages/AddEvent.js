import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import './AddEvent.css';

class AddEvent extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div className="AddEvent-card">
          <div onClick={onClose} className="AddEvent-close">
            <div>X</div>
          </div>
          <div className="AddEvent-content">
            <h1>Add the stuff ;)</h1>
          </div>
      </div>
    );
  }
}

const AddEventContainer = connect(
  (state, ownProps) => ({

  }),
  (dispatch) => ({
    onClose: () => dispatch(goBack())
  })
)(AddEvent);

export default AddEventContainer;
