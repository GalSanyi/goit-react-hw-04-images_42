import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  handleSetQuery = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <header className={s.Searchbar}>
          <form onSubmit={this.handleSubmitForm} className={s.SearchForm}>
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              value={this.state.query}
              onChange={this.handleSetQuery}
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
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
