import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";
// import {films} from '../../mocks/films';
import OrderCard from '../order-card/order-card';
import {Film} from '../../prop-types/film';
// import {films} from '../../mocks/films';

const OrderList = ({films, onDelete}) => {
  const [activeCard, setActiveCard] = React.useState();
  return (
    // const {films} = props;
    films.map((film) => (
      <article key={film.id} className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          setActiveCard(film.id);
        }}
        onMouseLeave={() => {
          setActiveCard();
        }}>
        <OrderCard key={film.id} film={film} onDelete={onDelete} />
        {/* <h1>{activeCard}</h1> */}
      </article>
    ))
    // <h2></h2>
  );
};

OrderList.propTypes = {
  films: PropTypes.arrayOf(Film).isRequired,
  // films: PropTypes.array.isRequired,
};


export default OrderList;
