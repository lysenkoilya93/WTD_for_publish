import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";
// import {films} from '../../mocks/films';
import FilmCard from '../card/card';
import {Film} from '../../prop-types/film';
// import {films} from '../../mocks/films';

const FilmsList = ({films}) => {
  const [activeCard, setActiveCard] = React.useState();
  const [filmsInSort, setFilmsInSort] = React.useState(films);
  // const trySort = function (films) {
  //   films.sort(function (a, b) {
  //     return a.profileQuality[4].rating > b.profileQuality[4].rating;
  //   });
  //   return films;
  // };
  return (
    <>
      <button style={{width: `100%`}} onClick={() => setFilmsInSort(filmsInSort.sort(function (a, b) {
        return a.profileQuality[4].rating < b.profileQuality[4].rating;
      }))}>
        Sort by rating
      </button>

      {filmsInSort.map((film) => (
        <article key={film.id} className="small-movie-card catalog__movies-card"
          onMouseEnter={() => {
            setActiveCard(film.id);
          }}
          onMouseLeave={() => {
            setActiveCard();
          }}>
          <FilmCard key={film.id} film={film} />
          {/* <h1>{activeCard}</h1> */}
        </article>
      ))}

    </>
  );

};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(Film).isRequired,
  // films: PropTypes.array.isRequired,
};


export default FilmsList;
