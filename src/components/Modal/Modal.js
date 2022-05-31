import React, { useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ handleToggleModal, modalImg }) {
  const onCloseModalByEsc = event => {
    if (event.keyCode === 27) {
      handleToggleModal('');
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
          handleToggleModal('');
        }
      }}
    >
      <div className={s.Modal}>
        <img src={modalImg} alt="" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
};
