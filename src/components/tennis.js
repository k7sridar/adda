import React from 'react';
import image from '../img/tennis.jpeg';

const Tennis = ({ setActive, setAlert }) => {
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
          <img src={image} alt="no img" />
        </div>
        <div className="content">
          <a className="header">Tennis court</a>
        </div>
      </div>
    </div>
  );
};

export default Tennis;
