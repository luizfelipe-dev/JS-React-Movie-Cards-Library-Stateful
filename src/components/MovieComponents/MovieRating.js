import React from 'react';
import propTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label" className="label">
        <div className="control">
          Rating:
          {' '}
          <input
            className="input"
            type="number"
            name="rating"
            placeholder="1 a 5"
            min="1"
            max="5"
            value={ value }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </div>
      </label>
    );
  }
}

export default MovieRating;

MovieRating.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
};
