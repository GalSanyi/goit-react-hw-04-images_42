import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ handleLoadMore }) {
  return (
    <button onClick={handleLoadMore} type="button" className={s.Button}>
      Load more
    </button>
  );
}
Button.prototype = {
  handleLoadMore: PropTypes.func.isRequired,
};
