import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import films from '../../mocks/films';
import Counter from '../counter/counter';
import Profile from '../taste-profile/taste-profile';
import QualityProfile from '../quality-profile/quality-profile';

// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import {PolarArea} from 'react-chartjs-2';

// ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const FilmPage = (props) => {
  const {film, onAdd} = props;
  const id = Number(useParams().id);
  const item = films.find((it) => it.id === id);
  const {name, posterImage, backgroundImage, genre, released, description, rating, scoresCount, director, starring, cost, weight, profile, profileQuality} = item;
  const [productCount, setProductCount] = React.useState(weight);
  const price = Math.round((cost * productCount) / weight);
  // const data = {
  //   labels: [`Red`, `Blue`, `Yellow`, `Green`, `Purple`, `Orange`],
  //   datasets: [
  //     {
  //       label: `# of Votes`,
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         `rgba(255, 99, 132, 0.5)`,
  //         `rgba(54, 162, 235, 0.5)`,
  //         `rgba(255, 206, 86, 0.5)`,
  //         `rgba(75, 192, 192, 0.5)`,
  //         `rgba(153, 102, 255, 0.5)`,
  //         `rgba(255, 159, 64, 0.5)`,
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  item.price = price;
  item.count = productCount;
  return (
    <><section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">D</span>
            </Link>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <h2>{price}Р</h2>
            <div>
        Количество, гр:{` `}
              <Counter value={productCount} minValue={0} onChange={setProductCount} />
            </div>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Попить</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                onAdd(item);
                // alert(`gavv`);
                console.log(order);
                // console.log(order);
              } }>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>Купить</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="218" />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{profileQuality[4].rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">Very good</span>
                <span className="movie-rating__count">{scoresCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              {description}
              {/* <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.</p>

              <p>Gustave prides himself on providing first-class service to the hotel&aposs guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p> */}
              <Profile profile={profile} />
              {/* <p className="movie-card__director"><strong>{director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {starring} and other</strong></p> */}
              <QualityProfile profileQuality={profileQuality} />
            </div>
          </div>
        </div>
      </div>
    </section><div className="page-content">
      {/* <section>
        <PolarArea data={data} />;
      </section> */}
      {/* <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
            </h3>
          </article>
        </div>
      </section> */}

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">D</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2023 What to drink Ltd.</p>
        </div>
      </footer>
    </div></>
  );
};

FilmPage.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    cost: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    profile: PropTypes.array.isRequired,
    profileQuality: PropTypes.array.isRequired
    // id: PropTypes.number.isRequired,
  })
};

// released, description, rating, scoresCount, director, starring

export default FilmPage;

