import React, { PureComponent } from 'react';
import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';
import './FilterMenu.css';

class FilterMenu extends PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div className="FilterMenu-container">
        <div className="FilterMenu-menu animated fadeIn">
          <div className="FilterMenu-header animated fadeInDown">
              <div className="FilterMenu-close animated bounceIn" onClick={onClose}/>
              <div className="FilterMenu-title">Sharp it</div>
              <div className="FilterMenu-shortLine" />

              <form className="FilterMenu-form">
                <input type="text" className="FilterMenu-input" placeholder="#SearchSomething?" autofocus />
                <button type="submit" className="FilterMenu-checkButton animated fadeIn" defaultValue="" />
              </form>
          </div>

          <ul className="FilterMenu-trendy animated fadeInUp">
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
