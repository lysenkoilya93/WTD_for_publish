import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
// import {useParams} from "react-router-dom";
// import FontAwesomeIcon;
// import {FaTrash} from 'react-icons/fa';
// import { Film } from '../../prop-types/film';

const OrderCard = (props) => {
  const {film, onDelete} = props;
  const {name, posterImage, cost, weight, price, count, id} = film;
  // const id = Number(useParams().id);
  // const item = order.find((it) => it.id === id);
  return (
    <>
      <button type="button" onClick={() => {
        onDelete(id);
      } }>🗑</button>
      <div className="small-movie-card__image">

        {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
        {/* <FaTrash /> */}
        <img src={posterImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" style={{borderRadius: `50%`}} />
      </div>

      <h3 className="small-movie-card__title">
        <p>{price} ₽</p>
        <p>{count} грамм</p>
        <Link to={`films/${film.id}`} className="small-movie-card__link" >{name}</Link>
      </h3>
      {/* <div onClick={() => {
        onDelete(id);
        // console.log(order);
      } }>🗑sdfsd</div> */}
    </>
  );
};


OrderCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    // id: PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func.isRequired
};


export default OrderCard;
