import React from 'react';
import PropTypes from 'prop-types';
import OrderList from '../order-list/order-list';
import {Film} from '../../prop-types/film';
import {Link} from "react-router-dom";


const OrderPage = (props) => {
  const {order, onDelete} = props;
  let summa = 0;
  order.forEach((film) => summa += film.price);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <OrderList films={order} onDelete={onDelete} />

        </div>
        <h2>Итого: {summa} ₽</h2>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

OrderPage.propTypes = {
  order: PropTypes.arrayOf(Film).isRequired,
  onDelete: PropTypes.func.isRequired
  // films: PropTypes.array.isRequired,
};

export default OrderPage;
