import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFn, closeFn, booking } from '../operation';

const TennisSLot = ({
  member,
  active,
  setActive,
  setAlert,
  price,
  setPrice,
}) => {
  const [select, setSelect] = useState([]);
  const dispatch = useDispatch();
  const tennisSlots = useSelector((state) => state.tennisStore);
  const bookingFn = () => {
    booking(setSelect, setActive, setAlert);
    if (select.length === 0) return;
    dispatch({ type: 'book-ts-slot', payload: { select, member } });
  };

  return (
    <div className={`ui ${active ? 'active' : ''}  modal`}>
      <i
        className="close icon"
        onClick={() => {
          closeFn(setActive, tennisSlots, setSelect, 'tennis', setPrice);
        }}
      ></i>

      <div className="header">2012-10-26</div>
      <div className="image content">
        <div className="description">
          <div className="ui header">Tennis Slots </div>
        </div>
      </div>
      <div>
        <div className="ui three column grid">
          {tennisSlots.map((v, i) => {
            return (
              <div className="ui column grid" key={i}>
                <button
                  className={`ui inactive primary  ${
                    v.booked ? 'disabled' : ''
                  } button`}
                  id={i + `tennis`}
                  onClick={() => {
                    if (select.includes(i)) return;
                    setSelect([...select, i]);
                    setPrice(v.price + price);
                    toggleFn(i, 'tennis');
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
            tennisSlots.forEach((v, i) => {
              closeFn(setActive, tennisSlots, setSelect, 'tennis', setPrice);
            });
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

export default TennisSLot;
