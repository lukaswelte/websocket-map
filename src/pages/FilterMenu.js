import React, { PureComponent } from 'react';
import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';
import './FilterMenu.css';

class FilterMenu extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div className="FilterMenu-container">
        <div className="FilterMenu-menu">
          <div className="FilterMenu-header">
          <div className="FilterMenu-close" onClick={onClose}/>
            <div className="FilterMenu-title">Sharp it</div>
            <div className="FilterMenu-shortLine" />

            <form className="FilterMenu-form">
              <input type="text" className="FilterMenu-input" placeholder="#SearchSomething?" />
              <button type="submit" className="FilterMenu-valid" defaultValue="" />
            </form>
          </div>

          <ul className="FilterMenu-trendy">
            <li className="FilterMenu-trendy-title">Trendy in Munich</li>
            <li><a href="#" target="_self">#MarientplatzStrike</a></li>
            <li><a href="#" target="_self">#CounterPegida</a></li>
            <li><a href="#" target="_self">#BestBurger</a></li>
            <li><a href="#" target="_self">#Sendligator</a></li>
            <li><a href="#" target="_self">#TDUbar</a></li>
            <li><a href="#" target="_self">#RooftopParty</a></li>
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
