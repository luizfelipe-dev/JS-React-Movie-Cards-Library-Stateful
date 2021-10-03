import React from 'react';
import propTypes from 'prop-types';

class MovieGenre extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Genre:
        {' '}
        <select
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Action</option>
          <option value="comedy" data-testid="genre-option">Comedy</option>
          <option value="thriller" data-testid="genre-option">Thriler</option>
          <option value="fantasy" data-testid="genre-option">Fantasy</option>
        </select>
      </label>
    );
  }
}

export default MovieGenre;

MovieGenre.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
