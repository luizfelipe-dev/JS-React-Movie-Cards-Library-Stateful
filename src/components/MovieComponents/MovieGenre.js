import React from 'react';
import propTypes from 'prop-types';

class MovieGenre extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label" className="label">
        <div className="control">
          Genre:
          {' '}
          <br />
          <select
            className="select"
            name="genre"
            value={ value }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option value="ação" data-testid="select-option">ação</option>
            <option value="comédia" data-testid="select-option">comédia</option>
            <option value="drama" data-testid="select-option">drama</option>
            <option value="suspense" data-testid="select-option">suspense</option>
            <option value="guerra" data-testid="select-option">guerra</option>
            <option value="faroeste" data-testid="select-option">faroeste</option>
            <option value="ficção científica" data-testid="select-option">ficção científica</option>
          </select>
        </div>
      </label>
    );
  }
}

export default MovieGenre;

MovieGenre.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
