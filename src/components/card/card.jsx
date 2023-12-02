import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
// import { Film } from '../../prop-types/film';

const FilmCard = (props) => {
  const {film} = props;
  const {name, posterImage} = film;
  return (
    <>
      <div className="small-movie-card__image">
        <img src={posterImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" style={{ borderRadius: "50%" }} />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`films/${film.id}`} className="small-movie-card__link" >{name}</Link>
      </h3>
    </>
  );
};


FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
    // id: PropTypes.number.isRequired,
  })
};


export default FilmCard;


