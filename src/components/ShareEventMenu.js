import React, { PureComponent } from 'react';
import Menu from 'react-motion-menu';
import './ShareEventMenu.css';

export default class ShareEventButton extends PureComponent {
  render() {

    const { shareText } = this.props;

    const x = window.innerHeight;
    const y = window.innerWidth;

    const currentURL = window.location.href;

    const shareTwitter = () => {
      window.open(`https://twitter.com/share?url=${currentURL}&via=blackwall_whsp&text=${shareText}`);
    }

    const shareFacebook = () => {
      window.open(`https://www.facebook.com/sharer.php?u=${currentURL}`);
    }

    const shareSMS = () => {
      window.open(`sms:?body=${shareText}`);
    }

    const shareWhatsapp = () => {
      window.open(`whatsapp://send?text=${shareText}`);
    }

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
        <div onClick={shareTwitter} className="ShareEventButton-btn-twitter" />
        <div onClick={shareFacebook} className="ShareEventButton-btn-facebook" />
        <div onClick={shareSMS} className="ShareEventButton-btn-sms" />
        <div onClick={shareWhatsapp} className="ShareEventButton-btn-whatsapp" />
      </Menu>
    );
  }
}
