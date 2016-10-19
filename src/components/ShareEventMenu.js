import React, { PureComponent } from 'react';
import Menu from 'react-motion-menu';
import './ShareEventMenu.css';

export default class ShareEventButton extends PureComponent {
  render() {
    const x = window.innerHeight;
    const y = window.innerWidth;

    return (
      <Menu
        customClass="ShareEventButton-btn"
        direction='vertical'
        distance={-80}
        width={60}
        height={60}
        y={x-100}
        x={y/2}
        >
        <div><div className="ShareEventButton-btn-menu"/></div>
        <div className="ShareEventButton-btn-twitter" />
        <div className="ShareEventButton-btn-facebook" />
        <div className="ShareEventButton-btn-sms" />
        <div className="ShareEventButton-btn-whatsapp" />
      </Menu>
    );
  }
}
