import React from 'react';
import propTypes from 'prop-types';

class MovieImage extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label" className="label">
        <div className="control">
          Image Path:
          {' '}
          <input
            placeholder="/images/nome_da_imagem.jpg"
            className="input"
            name="imagePath"
            type="text"
            value={ value }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </div>
      </label>
    );
  }
}

export default MovieImage;

MovieImage.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
