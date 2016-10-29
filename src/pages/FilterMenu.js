import React, { PureComponent } from 'react';
import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';
import './FilterMenu.css';

class FilterMenu extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div className="FilterMenu-container" onClick={onClose}>
        <div className="FilterMenu-close" onClick={onClose}/>
        <div className="FilterMenu-menu">
          <div className="FilterMenu-title">Looking for<br/>Something<br/>Special?</div>
          <div className="FilterMenu-shortLine" />

          <ul className="FilterMenu-categories">
            <li><div className="FilterMenu-subcategory-selected">I want them all</div></li>
            <li><div className="FilterMenu-subcategory">I'm Dating</div></li>
            <li><div className="FilterMenu-subcategory">I'm too Sober</div></li>
            <li><div className="FilterMenu-subcategory">I'm Starving</div></li>
            <li><div className="FilterMenu-subcategory">I've Guest</div></li>
            <li><div className="FilterMenu-subcategory">I've Kids</div></li>
            <li><div className="FilterMenu-subcategory">I'm a Refugee</div></li>
            <li><div className="FilterMenu-subcategory">Give me something!</div></li>
            <li><div className="FilterMenu-subcategory">Give me something!</div></li>
          </ul>

        </div>
      </div>
    );
  }
}

const FilterMenuContainer = connect(
  (state, ownProps) => ({}),
  (dispatch) => ({
    onClose: () => dispatch(goBack())
  })
)(FilterMenu);

export default FilterMenuContainer;
