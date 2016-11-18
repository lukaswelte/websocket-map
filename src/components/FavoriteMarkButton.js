import React, { PureComponent } from 'react';
import './FavoriteMarkButton.css';

export default class FavoriteMarkButton extends PureComponent {
  render() {
    const { onClick, style, isFavorite } = this.props;

    const buttonClass = isFavorite ? "FavoriteMarkButton-favorite" : "FavoriteMarkButton-unFavorite";

    return (
      <div onClick={onClick} style={style} className={buttonClass} />
    );
  }
}
