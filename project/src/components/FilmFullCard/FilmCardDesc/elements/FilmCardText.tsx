import React from 'react';
import {Films} from '../../../../mocks/films';

export type FilmCardTextProps = 'description' | 'director' | 'starring'

const FilmCardText = ({description, director, starring}: Pick<Films, FilmCardTextProps>) => (
  <div className="film-card__text">
    <p>
      {description}
    </p>

    <p className="film-card__director"><strong>Director: {director}</strong></p>

    <p className="film-card__starring">
      <strong>Starring: {starring.join(', ')}
      </strong>
    </p>
  </div>
);

export default FilmCardText;
