import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToLogin, goToMap, goBack as back } from '../actions/routing';
import { updateEmail, updateName, updateVerificationCode, register } from '../actions/loginForm';
import './Login.css';

class Login extends Component {
  render() {

    const {
      params,
      goToStep,
      showMap,
      goBack,
      loginForm,
      setName,
      setEmail,
      setVerificationCode,
      requestRegister
    } = this.props;

    const showStep = (e, step) => {
      e.preventDefault();
      goToStep(step);
    }

    const sendRegister = (e) => {
      e.preventDefault();
      requestRegister(loginForm.name, loginForm.email);
    }

    const sendVerify = (e) => {
      e.preventDefault();
      showMap();
    }

    switch (params.step) {
      case "1":
        return (
          <div className="Login-background">
            <div onClick={goBack} className="login-shift">Maybe later</div>
            <div className="Login-content">
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form onSubmit={(e) => showStep(e, 2)} className="Login-form">
                <input type="text" value={loginForm.name} className="Login-input" placeholder="I'm Dark Vador?" onChange={e => setName(e.target.value)} />
                <input type="submit" className="Login-valid" defaultValue=""/>
              </form>
            </div>
          </div>
        );

      case "2":
        return (
          <div className="Login-background">
            <div className="Login-content">
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form onSubmit={sendRegister} className="Login-form">
                <input type="text" value={loginForm.email} onChange={e => setEmail(e.target.value)} className="Login-input" placeholder="We need your @" />
                <input type="submit" className="Login-valid" defaultValue=""/>
              </form>
            </div>
          </div>
        );

      case "3":
        return (
          <div className="Login-background">
            <div className="Login-content">
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form onSubmit={sendVerify} className="Login-form">
                <input type="text" value={loginForm.verificationCode} onChange={e => setVerificationCode(e.target.value)} className="Login-input" placeholder="Received a code?" />
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
    loginForm: state.loginForm
  }),
  (dispatch) => ({
    goToStep: bindActionCreators(goToLogin, dispatch),
    goBack: bindActionCreators(back, dispatch),
    showMap: bindActionCreators(goToMap, dispatch),
    setEmail: bindActionCreators(updateEmail, dispatch),
    setName: bindActionCreators(updateName, dispatch),
    setVerificationCode: bindActionCreators(updateVerificationCode, dispatch),
    requestRegister: bindActionCreators(register, dispatch),
  })
)(Login);

export default LoginContainer;
