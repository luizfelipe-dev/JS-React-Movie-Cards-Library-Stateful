import React from 'react';
import propTypes from 'prop-types';

class MovieSubtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label
        htmlFor="subtitle-input"
        data-testid="subtitle-input-label"
        className="label"
      >
        <div className="control">
          Nome Original:
          {' '}
          <input
            className="input"
            name="subtitle"
            value={ value }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </div>
      </label>
    );
  }
}

export default MovieSubtitle;

MovieSubtitle.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
