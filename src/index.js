import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';

// const Settings = {
//   NAME: `The Grand Budapest Hotel`,
//   GENRE: `Drama`,
//   YEAR: 2014
// };

ReactDOM.render(
    <App
      films={films}
    />,
    document.querySelector(`#root`)
);
