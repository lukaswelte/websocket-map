import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToLogin, goToMapOrRedirect, goToImprint } from '../actions/routing';
import { updateEmail, updateName, updateVerificationCode, register, verify } from '../actions/loginForm';
import LegalButton from '../components/LegalButton';
import LaterButton from '../components/LaterButton';
import './Login.css';

class Login extends Component {
  render() {
    const {
      params,
      goToStep,
      goToMapOrRedirect,
      showImprint,
      loginForm,
      setName,
      setEmail,
      setVerificationCode,
      requestRegister,
      requestVerify,
      token
    } = this.props;

    if (token) {
      console.log('redirect from login');
      goToMapOrRedirect();
    }

    if (params.step !== "1" && loginForm.name.length < 1) {
      //user tried to start at position larger than 1
      goToStep(1);
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
      console.log('requested verify');
      requestVerify(loginForm.email, loginForm.verificationCode);
    }

    switch (params.step) {
      case "1":
        return (
          <div className="Login-background">
            <div className="Login-content">
            <LegalButton onClick={showImprint} />
            <LaterButton onClick={goToMapOrRedirect} />

            <ul className="Login-steps">
              <li style={{backgroundColor:'rgba(255,255,255,.4)'}}/>
              <li/>
              <li/>
            </ul>

              <div className="monogramWhite"/>
              <div className="Login-baseline">
              For the full experience,<br />
              we need your name Stranger.
              </div>

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
            <LegalButton onClick={showImprint} />
            <LaterButton onClick={goToMapOrRedirect} />

            <ul className="Login-steps">
              <li/>
              <li style={{backgroundColor:'rgba(255,255,255,.4)'}}/>
              <li/>
            </ul>

              <div className="monogramWhite"/>

              <div className="Login-baseline">
              We will also<br />
              need your email.
              </div>

              <form onSubmit={sendRegister} className="Login-form">
                <input type="text" value={loginForm.email} onChange={e => setEmail(e.target.value)} className="Login-input" placeholder="Write your @ here!" />
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
            <LaterButton onClick={goToMapOrRedirect} />

            <ul className="Login-steps">
              <li/>
              <li/>
              <li style={{backgroundColor:'rgba(255,255,255,.4)'}}/>
            </ul>

              <div className="monogramWhite"/>
              <div className="Login-baseline">
              To finalize,<br />
              we sent you a special code.
              </div>
              <form onSubmit={sendVerify} className="Login-form">
                <input type="text" value={loginForm.verificationCode} onChange={e => setVerificationCode(e.target.value)} className="Login-input" placeholder="☻ ☻ ☻ ☻" />
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
    goToMapOrRedirect: bindActionCreators(goToMapOrRedirect, dispatch),
    showImprint: bindActionCreators(goToImprint, dispatch),
    setEmail: bindActionCreators(updateEmail, dispatch),
    setName: bindActionCreators(updateName, dispatch),
    setVerificationCode: bindActionCreators(updateVerificationCode, dispatch),
    requestRegister: bindActionCreators(register, dispatch),
    requestVerify: bindActionCreators(verify, dispatch)
  })
)(Login);

export default LoginContainer;
