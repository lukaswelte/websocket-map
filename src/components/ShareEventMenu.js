import React, { PureComponent } from 'react';
import Menu from 'react-motion-menu';
import './ShareEventMenu.css';

export default class ShareEventButton extends PureComponent {
  render() {
    const { style, children, onClick } = this.props;
    var x = window.innerHeight;
    var y = window.innerWidth;

    return (
      <Menu
        customClass="ShareEventButton-btn"
        customStyle={{background: 'background: url(../img/btn-Share.svg)'}}
        direction='vertical'
        distance={-80}
        width={60}
        height={60}
        y={x-100}
        x={y/2}
        onClick={onClick}
        >
        <i></i>
        <div className="ShareEventButton-btn-twitter"></div>
        <div className="ShareEventButton-btn-facebook"></div>
        <div className="ShareEventButton-btn-sms"></div>
        <div className="ShareEventButton-btn-whatsapp"></div>
      </Menu>
    );
  }
}
