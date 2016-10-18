import React, { PureComponent } from 'react';
import Menu from 'react-motion-menu';

export default class ShareEventButton extends PureComponent {
  render() {
    const { style, children, onClick } = this.props;

    return (
      <Menu
        customStyle={style}
        direction='vertical'
        distance={80}
        width={50}
        height={50}
        y={500}
        x={100}
        onClick={onClick}
        >
        <i>Share Menü</i>
        <div>FB</div>
        <div>Twitter</div>
        <div>G+</div>
        {children}
      </Menu>
    );
  }
}
