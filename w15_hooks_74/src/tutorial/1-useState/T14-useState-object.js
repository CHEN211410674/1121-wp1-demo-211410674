import React, { useState } from 'react';

const T14_74_useStateObject = () => {
  const [person, setPerson] = useState({
    name: 'CHEN YI-ZHEN',
    id: 211410674,
    message: 'random message',
  });
  const changeMessage = () => {
    setPerson({ ...person, message: 'Welcome to Learn React' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.id}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        ChangeMessage
      </button>
    </>
  );
};

export default T14_74_useStateObject;
