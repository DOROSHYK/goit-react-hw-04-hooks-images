import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGaleryItem/ImageGaleryItem";

class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { images, onItemClick } = this.props;
    return (
      <ul className={s.ImageGallery} onClick={this.handleOpenModal}>
        {images &&
          images.map((image) => (
            <ImageGalleryItem
              key={image.id}
              {...image}
              onItemClick={onItemClick}
            />
          ))}
      </ul>
    );
  }
}

export default ImageGallery;
