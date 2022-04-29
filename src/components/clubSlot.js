import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFn, closeFn, booking } from './operation';

const ClubSlot = ({ member, active, setActive, setAlert, price, setPrice }) => {
  const [select, setSelect] = useState([]);

  const dispatch = useDispatch();
  const clubSlots = useSelector((state) => state.clubStore);

  const bookingFn = () => {
    booking(setSelect, setActive, setAlert);
    if (!select.length === 0) return;
    dispatch({ type: 'book-CH-slot', payload: { select, member } });
  };

  return (
    <div className={`ui ${active ? 'active' : ''}  modal`}>
      <i
        className="close icon"
        onClick={() => {
          closeFn(setActive, clubSlots, setSelect, 'club', setPrice);
        }}
      ></i>

      <div className="header">2012-10-26</div>
      <div className="image content">
        <div className="description">
          <div className="ui header">Club House Slots</div>
        </div>
      </div>
      <div>
        <div className="ui three column grid">
          {clubSlots.map((v, i) => {
            return (
              <div className="ui column grid" key={i}>
                <button
                  className={`ui inactive primary  ${
                    v.booked ? 'disabled' : ''
                  } button`}
                  id={i + 'club'}
                  onClick={() => {
                    if (select.includes(i)) return;
                    setSelect([...select, i]);
                    setPrice(v.price + price);
                    toggleFn(i, 'club');
                  }}
                >
                  {v.member
                    ? v.member + ' has booked the slot'
                    : v.time + ` ₹ ${v.price}`}
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
            clubSlots.forEach((v, i) => {
              closeFn(setActive, clubSlots, setSelect, 'club', setPrice);
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

export default ClubSlot;
