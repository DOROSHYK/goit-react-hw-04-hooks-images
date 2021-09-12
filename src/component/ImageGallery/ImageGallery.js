import React from "react";
// import PropTypes from "prop-types";

import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGaleryItem/ImageGaleryItem";

function ImageGallery({ onClick, images, onItemClick }) {
  // static propTypes = {
  //   onClick: PropTypes.func.isRequired,
  //   onItemClick: PropTypes.func.isRequired,
  //   images: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //     })
  //   ).isRequired,
  // };

  const handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      onClick();
    }
  };

  // const { images, onItemClick } = this.props;
  return (
    <ul className={s.ImageGallery} onClick={handleOpenModal}>
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

export default ImageGallery;
