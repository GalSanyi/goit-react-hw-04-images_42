import React from 'react';
import s from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, handleToggleModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tag }) => (
        <ImageGalleryItem
          handleToggleModal={handleToggleModal}
          key={id}
          tag={tag}
          img={webformatURL}
          modalImg={largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
