import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToIntroduction, goToMapOrRedirect, goToImprint } from '../actions/routing';
import AddMarkButton from '../components/AddMarkButton';
import LegalButton from '../components/LegalButton';
import LaterButton from '../components/LaterButton';
import './Introduction.css';

class Introduction extends Component {
  render() {
    const { params, goToStep, goToMap, token, showImprint } = this.props;

    if (token) {
      goToMap();
    }

    switch (params.id) {
      case "1":
        return (
          <div className="Intro-background">
            <LaterButton onClick={goToMap} color={'#252525'}/>
            <div className="Intro-content">
            <LegalButton onClick={showImprint} color={'#252525'}/>
            <ul className="Intro-steps">
              <li style={{backgroundColor:'#A5A5A5'}}/>
              <li/>
              <li/>
              <li/>
            </ul>
              <div className="Intro-monogramBlack"/>
              <h1>This is you.<br />At the center<br />of your universe.</h1>
              <h3>We will need your localisation</h3>
              <div onClick={() => goToStep(2)} className="Intro-check"/>
            </div>
          </div>
        );

      case "2":
        return (
          <div className="Intro-background">
            <LaterButton onClick={goToMap} color={'#252525'}/>
            <div className="Intro-background-dots">
            <div className="Intro-content">
            <LegalButton onClick={showImprint} color={'#252525'}/>
            <ul className="Intro-steps">
              <li/>
              <li style={{backgroundColor:'#A5A5A5'}}/>
              <li/>
              <li/>
            </ul>
              <div className="Intro-monogramBlack"/>
              <h1>Be inspired<br />by little things<br />around you.</h1>
              <h3 style={{top:'50px'}}>We want to highlight you <br />the beauty of your city</h3>
              <div onClick={() => goToStep(3)} className="Intro-check"/>
            </div>
            </div>
          </div>
        );

      case "3":
        return (
          <div className="Intro-background">
            <LaterButton onClick={goToMap} color={'#252525'}/>
            <div className="Intro-background-dots">
                <div className="Intro-content">
                <LegalButton onClick={showImprint} color={'#252525'}/>
                <ul className="Intro-steps">
                  <li/>
                  <li/>
                  <li style={{backgroundColor:'#A5A5A5'}}/>
                  <li/>
                </ul>
                  <AddMarkButton/>
                  <div className="Intro-monogramNot"/>
                  <h1>Mark the favorite<br />spots you want<br />to remember</h1>
                  <h3>If we missed something<br />save it for yourself :)</h3>
                  <div onClick={() => goToStep(4)} className="Intro-check"/>
                </div>
              </div>
          </div>
        );

        case "4":
          return (
            <div onClick={goToMap} className="Intro-background">
              <LaterButton onClick={goToMap} color={'#252525'}/>
              <div className="Intro-background-dots">
                  <div className="Intro-content">
                  <LegalButton onClick={showImprint} color={'#252525'}/>
                  <ul className="Intro-steps">
                    <li/>
                    <li/>
                    <li/>
                    <li style={{backgroundColor:'#A5A5A5'}}/>
                  </ul>
                    <div className="Intro-monogramBlack"/>
                    <h1>Enjoy your<br />exploration<br />& see you!</h1>
                    <h3>Be curious, be adventurous.</h3>
                    <div onClick={() => goToStep(4)} className="Intro-check"/>
                  </div>
                </div>
            </div>
          );

      default:
        return (
          <div>Shouldn't happen - so maybe just redirect to another page ;)</div>
        );
    }
  }
}

const IntroductionContainer = connect(
  (state) => ({
    token: state.auth.token
  }),
  (dispatch) => ({
    goToStep: bindActionCreators(goToIntroduction, dispatch),
    goToMap: bindActionCreators(goToMapOrRedirect, dispatch),
    showImprint: bindActionCreators(goToImprint, dispatch),
  })
)(Introduction);

export default IntroductionContainer;
