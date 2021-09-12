import React from "react";
// import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ webformatURL, id, onItemClick }) {
  // static propTypes = {
  //   onItemClick: PropTypes.func.isRequired,
  //   id: PropTypes.number.isRequired,
  //   webformatURL: PropTypes.string.isRequired,
  // };

  const modalContent = (id) => {
    onItemClick(id);
  };

  // const { id, webformatURL } = this.props;
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt=""
        className={s.ImageGalleryItem_image}
        onClick={() => modalContent(id)}
      />
    </li>
  );
}

export default ImageGalleryItem;
