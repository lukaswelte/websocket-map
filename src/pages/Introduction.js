import React, { Component } from 'react';
import './Introduction.css';

export default class Introduction extends Component {
  render() {
    const { params } = this.props;

    switch (params.id) {
      case "1":
        return (
          <div className="Intro-background">
            <div className="Intro-content">
              <div className="monogramBlack"/>
              <h1>This is you<br />& your<br />localisation</h1>
              <div className="Intro-check"/>
            </div>
          </div>
        );

      case "2":
        return (
          <div className="Intro-background">
            <div className="Intro-background-dots">
            <div className="Intro-content">
              <div className="monogramBlack"/>
              <h1>We will<br />inspire you<br />with little things</h1>
              <a href="" className="Intro-check"/>
            </div>
            </div>
          </div>
        );

      case "3":
        return (
          <div className="Intro-background">
            <div className="Intro-background-dots">
              <div className="Intro-background-finger">
                <div className="Intro-content">
                  <div className="monogramBlack"/>
                  <h1>Maintain<br />pressed to see<br />details</h1>
                  <a href="" className="Intro-check"/>
                </div>
              </div>
            </div>
          </div>
        );

        case "4":
          return (
            <div className="Intro-event-card">
                <div className="Intro-event-close">
                  <div>X</div>
                </div>
                <div className="Intro-event-content">
                  <h1>Find here<br />what the f*ck<br />is it about!</h1>
                  <h3>Distance from you</h3>
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
