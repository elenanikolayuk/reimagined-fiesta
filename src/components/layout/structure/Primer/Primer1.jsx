import React, { useState } from 'react';

function Primer1() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>

      <p className='count'>Счетчик: {count}</p>
      <button onClick={decrement} className="countbotton">-1</button>
      <button onClick={increment} className="countbotton">+1</button>
     
    </div>
  );
}

export  {Primer1};