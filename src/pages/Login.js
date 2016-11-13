import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToLogin, goToMap, goToImprint, goBack as back } from '../actions/routing';
import LegalButton from '../components/LegalButton';
import './Login.css';

class Login extends Component {
  render() {

    const { params, goToStep, showMap, goBack, showImprint } = this.props;

    const showStep = (e, step) => {
      e.preventDefault();
      goToStep(step);
    }

    switch (params.step) {
      case "1":
        return (
          <div className="Login-background">
            <div onClick={goBack} className="login-shift">Maybe later</div>
            <div className="Login-content">
            <LegalButton onClick={showImprint} />
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form onSubmit={(e) => showStep(e, 2)} className="Login-form">
                <input type="text" className="Login-input" placeholder="I'm Dark Vador?" />
                <input type="submit" className="Login-valid" defaultValue=""/>
              </form>
            </div>
          </div>
        );

      case "2":
        return (
          <div className="Login-background">
            <div className="Login-content">
            <LegalButton onClick={showImprint} />
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form onSubmit={(e) => showStep(e, 3)} className="Login-form">
                <input type="text" className="Login-input" placeholder="We need your @" />
                <input type="submit" className="Login-valid" defaultValue=""/>
              </form>
            </div>
          </div>
        );

      case "3":
        return (
          <div className="Login-background">
            <div className="Login-content">
            <LegalButton onClick={showImprint} />
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form onSubmit={showMap} className="Login-form">
                <input type="text" className="Login-input" placeholder="Received a code?" />
                <input type="submit" className="Login-valid" defaultValue=""/>
              </form>
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

const LoginContainer = connect(
  (state, ownProps) => ({

  }),
  (dispatch) => ({
    goToStep: bindActionCreators(goToLogin, dispatch),
    goBack: bindActionCreators(back, dispatch),
    showMap: bindActionCreators(goToMap, dispatch),
    showImprint: bindActionCreators(goToImprint, dispatch),
  })
)(Login);

export default LoginContainer;
