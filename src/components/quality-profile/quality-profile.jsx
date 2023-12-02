import React from "react";
import StarRating from "../star-rating/star-rating";


function QualityProfile({profileQuality}) {
  return (
    <div>
      <h2>Оценка чая</h2>
      <ul style={{listStyleType: `none`}}>
        {profileQuality.map((profileQuality) => (
          <li key={profileQuality.id}>
            <b style={{color: `#01579b`}}><StarRating rating={profileQuality.rating} />  {profileQuality.quality} - {profileQuality.rating}</b>
            {/* <p>{profileQuality.rating}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QualityProfile;
