import React, { useState } from 'react';

const Primer9 = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <label >
        <b className='count'>Введи свое имя:</b>
        <input className="countbotton3" type="text" value={name} onChange={handleChange} />
      </label>
      <p className='count'>Привет, {name}!</p>
    </div>
  );
}
export {Primer9}