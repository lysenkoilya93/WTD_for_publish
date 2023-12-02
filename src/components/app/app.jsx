import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import MyListPage from '../my-list-page/my-list-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import OrderPage from '../order-page/order-page';
import {Film} from '../../prop-types/film';
// import { films } from '../../mocks/films';

const App = (props) => {
  const {films} = props;
  const [order, setOrder] = React.useState([]);
  const addToOrder = (film) => {

    setOrder([...order, film]);
    // console.log(order);
  };
  // const {film} = films;
  const {id} = films;
  const deleteOrder = (id) => {
    setOrder(order.filter((film) => film.id !== id));
    console.log(order);
  };
  // console.log(order);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage films={films} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage film={films[id]} />
        </Route>
        <Route exact path="/films/:id">
          <FilmPage film={films[id]} onAdd={addToOrder} />
        </Route>
        <Route exact path="/mylist">
          <MyListPage films={films} />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage film={films[id]} />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/teabucket">
          <OrderPage order={order} onDelete={deleteOrder}/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(Film).isRequired,
  // films: PropTypes.arrayOf(Film).isRequired,
};

export default App;
