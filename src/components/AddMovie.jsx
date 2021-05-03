import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            data-testid="title-input"
            value={ title }
            onChange={ (event) => this.setState({ title: event.target.value }) }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ (event) => this.setState({ subtitle: event.target.value }) }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ (event) => this.setState({ imagePath: event.target.value }) }
          />
        </label>
        <label htmlFor="text-area" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="text-area"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ (event) => this.setState({ storyline: event.target.value }) }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
