import React from "react";
import {FaStar} from 'react-icons/fa';

function StarRating(props) {
  const {rating} = props;
  // let id = 0;
  // let bobby = 5;
  return (
    // [for (let i = 0; i < 5; i++) {
    //   if (i < rating) {
    //     <FaStar color="indianred" />
    //   } else {
    //     <FaStar color="grey" />
    //   }]
    // }
    // new Array(5).map((rating, i) => <FaStar color="indianred" key={i} />)
    <>
      <FaStar id="1" color={rating > 0 ? `indianred` : `grey`} />
      <FaStar id="2" color={rating > 1 ? `indianred` : `grey`} />
      <FaStar id="3" color={rating > 2 ? `indianred` : `grey`} />
      <FaStar id="4" color={rating > 3 ? `indianred` : `grey`} />
      <FaStar id="5" color={rating > 4 ? `indianred` : `grey`} />
    </>
  );


}

export default StarRating;
