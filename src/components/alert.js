import React from 'react';

const Alert = ({ price, member, active, setActive, setPrice }) => {
  if (price > 0) {
    return (
      <div className={`ui  ${active ? 'active' : ''} modal`}>
        <div className="ui icon header">
          <i className="thumbs up outline yellow icon"></i>
          <span style={{ color: 'blue' }}>Booking has been confirmed</span>
        </div>
        <div className="content">
          <p style={{ color: 'black' }}>{` ${member}`.toLocaleUpperCase()}</p>
          <p
            style={{ color: 'red' }}
          >{`You have to pay ₹${price} at place of utility`}</p>
        </div>
        <div className="actions">
          <div
            className="ui green ok inverted button"
            onClick={() => {
              setActive(false);
              setPrice(0);
            }}
          >
            <i className="checkmark icon"></i>
            Done
          </div>
        </div>
      </div>
    );
  }
};

export default Alert;
