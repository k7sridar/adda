import React from 'react';
import image from '../../img/clubhouse.jpeg';
const ClubHouse = ({ setActive, setAlert }) => {
  return (
    <div
      className="column"
      onClick={() => {
        setActive(true);
        setAlert(false);
      }}
    >
      <div className="ui fluid card">
        <div className="image">
          <img src={image} alt="no image" />
        </div>
        <div className="content">
          <a className="header">ClubHouse</a>
        </div>
      </div>
    </div>
  );
};

export default ClubHouse;
