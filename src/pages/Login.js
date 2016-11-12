import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToLogin, goToMap, goBack as back } from '../actions/routing';
import { updateEmail, updateName, updateVerificationCode, register, verify } from '../actions/loginForm';
import './Login.css';

class Login extends Component {
  render() {
    const {
      params,
      goToStep,
      goBack,
      showMap,
      loginForm,
      setName,
      setEmail,
      setVerificationCode,
      requestRegister,
      requestVerify,
      token
    } = this.props;

    if (token) {
      showMap();
    }

    const submitName = (e) => {
      e.preventDefault();
      goToStep(2);
    }

    const sendRegister = (e) => {
      e.preventDefault();
      requestRegister(loginForm.name, loginForm.email);
    }

    const sendVerify = (e) => {
      e.preventDefault();
      requestVerify(loginForm.email, loginForm.verificationCode);
    }

    switch (params.step) {
      case "1":
        return (
          <div className="Login-background">
            <div onClick={goBack} className="login-shift">Maybe later</div>
            <div className="Login-content">
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form onSubmit={submitName} className="Login-form">
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
    loginForm: state.loginForm,
    token: state.auth.token
  }),
  (dispatch) => ({
    goToStep: bindActionCreators(goToLogin, dispatch),
    goBack: bindActionCreators(back, dispatch),
    showMap: bindActionCreators(goToMap, dispatch),
    setEmail: bindActionCreators(updateEmail, dispatch),
    setName: bindActionCreators(updateName, dispatch),
    setVerificationCode: bindActionCreators(updateVerificationCode, dispatch),
    requestRegister: bindActionCreators(register, dispatch),
    requestVerify: bindActionCreators(verify, dispatch)
  })
)(Login);

export default LoginContainer;
