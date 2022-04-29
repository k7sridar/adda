import React, { useState } from 'react';
import Tennis from './tennis/tennis';
import ClubHouse from './clubhouse/clubhouse';
import Hall from './hall/hall';
import TennisSLot from './tennis/tennisSlot';
import HallSlot from './hall/hallSlot';
import ClubSlot from './clubhouse/clubSlot';
import Alert from './alert';
import image from '../img/men.jpeg';

const App = () => {
  const [Tsactive, setTActive] = useState(false);
  const [Hactive, setHActive] = useState(false);
  const [Cactive, setCActive] = useState(false);
  const [alert, setAlert] = useState(false);
  const [price, setPrice] = useState(0);
  const [member, setMember] = useState('KESAVAPERUMAL');
  return (
    <div>
      <div>
        <Alert
          member={member}
          active={alert}
          setActive={setAlert}
          price={price}
          setPrice={setPrice}
        />
        <TennisSLot
          member={member}
          active={Tsactive}
          setActive={setTActive}
          setAlert={setAlert}
          price={price}
          setPrice={setPrice}
        />
        <HallSlot
          member={member}
          active={Hactive}
          setActive={setHActive}
          setAlert={setAlert}
          price={price}
          setPrice={setPrice}
        />
        <ClubSlot
          member={member}
          active={Cactive}
          setActive={setCActive}
          setAlert={setAlert}
          price={price}
          setPrice={setPrice}
        />
        <h2 className="ui header">
          <img src={image} className="ui circular image" />
          Hai {`${member}`}
        </h2>
        <h1>Amenities Booking</h1>

        <div className="ui three column grid ">
          <Tennis setActive={setTActive} setAlert={setAlert} />
          <ClubHouse setActive={setCActive} setAlert={setAlert} />
          <Hall setActive={setHActive} setAlert={setAlert} />
        </div>
      </div>
    </div>
  );
};

export default App;
