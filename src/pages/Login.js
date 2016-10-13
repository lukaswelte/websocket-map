import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  render() {

    const { params } = this.props;

    switch (params.step) {
      case "1":
        return (
          <div className="Login-background">
            <a href="" className="login-shift">Maybe later</a>
            <div className="Login-content">
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form className="Login-form">
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
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form className="Login-form">
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
              <div className="monogramWhite"/>
              <div className="Login-baseline">Experience, Save & Share<br />Munich s Life</div>
              <form className="Login-form">
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
