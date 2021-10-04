import React from 'react';
import propTypes from 'prop-types';

class MovieStoryline extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="image-input" data-testid="storyline-input-label" className="label">
        <div className="control">
          Sinopse:
          {' '}
          <textarea
            className="textarea"
            name="storyline"
            type="text"
            value={ value }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </div>
      </label>
    );
  }
}

export default MovieStoryline;

MovieStoryline.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
