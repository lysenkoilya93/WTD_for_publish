import React from "react";
// import style from "./profile.module.css";

function Profile({profile}) {
  return (
    <div>
      <h2>Вкусоароматический профиль</h2>
      <ul>
        {profile.map((profile) => (
          <li key={profile.id}>
            <b style={{backgroundColor: `indianred`, color: `greenyellow`}}>{profile.tone}</b>
            <p>{profile.markers}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
