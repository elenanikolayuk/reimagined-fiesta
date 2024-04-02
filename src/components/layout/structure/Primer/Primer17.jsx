import React, { useState, useEffect } from 'react';

const Primer17 = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`Счетчик изменен на: ${count}`);
  }, [count]); // Зависимость [count] - выполнится при изменении состояния count

  return (
    <div>
      <p className='count'>{message}</p>
      <p className='count'>Счетчик: {count}</p>
      <button className="countbotton2" onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}

export default Primer17;