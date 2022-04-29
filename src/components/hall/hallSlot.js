import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFn, closeFn, booking } from '../operation';
const HallSlot = ({ member, active, setActive, setAlert, price, setPrice }) => {
  const [select, setSelect] = useState([]);
  const dispatch = useDispatch();
  const hallSlots = useSelector((state) => state.hallStore);

  const bookingFn = () => {
    booking(setSelect, setActive, setAlert);
    if (select.length === 0) return;
    console.log('booking');
    dispatch({ type: 'book-H-slot', payload: { select, member } });
  };
  return (
    <div className={`ui ${active ? 'active' : ''}  modal`}>
      <i
        className="close icon"
        onClick={() => {
          closeFn(setActive, hallSlots, setSelect, 'hall', setPrice);
        }}
      ></i>

      <div className="header">2012-10-26</div>
      <div className="image content">
        <div className="description">
          <div className="ui header">Hall Slots </div>
        </div>
      </div>
      <div>
        <div className="ui three column grid">
          {hallSlots.map((v, i) => {
            return (
              <div className="ui column grid" key={i + `hall`}>
                <button
                  className={`ui inactive primary  ${
                    v.booked ? 'disabled' : ''
                  } button`}
                  id={i + `hall`}
                  onClick={() => {
                    if (select.includes(i)) return;
                    setSelect([...select, i]);
                    setPrice(v.price + price);
                    toggleFn(i, 'hall');
                  }}
                >
                  {v.member ? v.member + ' has booked the slot' : v.time}
                </button>
                <br />
                <br />
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
      <div className="actions">
        <label>{`you have to pay ₹
 ${price}`}</label>
        <div
          className="ui black deny button"
          onClick={() => {
            closeFn(setActive, hallSlots, setSelect, 'hall', setPrice);
          }}
        >
          Cancel
        </div>
        <div
          className="ui positive right labeled icon button"
          onClick={() => bookingFn()}
        >
          BOOK
          <i className="checkmark icon"></i>
        </div>
      </div>
    </div>
  );
};

export default HallSlot;
