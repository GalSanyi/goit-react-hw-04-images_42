import React, { useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ modalImg, onClose }) {
  const onCloseModalByEsc = event => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onCloseModalByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseModalByEsc);
    };
  });

  return (
    <div
      className={s.Overlay}
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={s.Modal}>
        <img src={modalImg} alt="pictures" width="800" height="700" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
};
