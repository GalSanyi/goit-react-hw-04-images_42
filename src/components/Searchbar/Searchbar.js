import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmitForm = event => {
    event.preventDefault();
    onSubmit(query);
  };
  // const handleSetQuery = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };
  const handleSetQuery = event => {
    setQuery(event.currentTarget.value);
  };

  return (
    <div>
      <header className={s.Searchbar}>
        <form onSubmit={handleSubmitForm} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={query}
            onChange={handleSetQuery}
            name="query"
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
