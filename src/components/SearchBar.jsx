import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {

    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="text-input"
        >
          Inclui o texto:
          <input
            data-testid="text-input"
            name="searchText"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
