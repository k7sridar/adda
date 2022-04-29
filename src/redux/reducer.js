const data = {
  tennisSlot: [
    { time: '10.00 am -11.00 am', booked: false, price: 100 },
    { time: '11.00 am -12.00 pm', booked: false, price: 100 },

    { time: '12.00 pm -01.00 pm', booked: false, price: 200 },
    { time: '01.00 pm -02.00 pm', booked: false, price: 200 },

    { time: '12.00 pm -01.00 pm', booked: false, price: 300 },
    { time: '01.00 pm -02.00 pm', booked: false, price: 300 },
  ],
  hallSlot: [
    { time: '6.00 am -12.00 pm', booked: false, price: 3500 },
    { time: '12.00 pm -06.00 pm', booked: false, price: 4500 },
    { time: '06.00 pm -12.00 am', booked: false, price: 7000 },
  ],
  clubHouse: [
    { time: '6.00 am -12.00 pm', booked: false, price: 2500 },
    { time: '12.00 pm -06.00 pm', booked: false, price: 2500 },
    { time: '06.00 pm -12.00 am', booked: false, price: 3000 },
  ],
};

export const tennisReducer = (State = data.tennisSlot, action) => {
  if (action.type === 'book-ts-slot') {
    const indexData = action.payload.select;
    const member = action.payload.member;

    indexData.forEach((v) => {
      State[v].booked = true;
      State[v].member = member;
    });

    return State;
  }
  return State;
};
export const hallReducer = (State = data.hallSlot, action) => {
  if (action.type === 'book-H-slot') {
    const indexData = action.payload.select;
    const member = action.payload.member;

    indexData.forEach((v) => {
      State[v].booked = true;
      State[v].member = member;
    });

    return State;
  }
  return State;
};
export const clubReducer = (State = data.clubHouse, action) => {
  if (action.type === 'book-CH-slot') {
    const indexData = action.payload.select;
    const member = action.payload.member;

    indexData.forEach((v) => {
      State[v].booked = true;
      State[v].member = member;
    });

    return State;
  }
  return State;
};
