import React, { useState, useEffect } from 'react';

const Primer16 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Компонент был монтирован');
    return () => {
      console.log('Компонент будет размонтирован');
    };
  }, []); // Пустой массив зависимостей и возвращает функцию, 
					// а значит выполнится только при монтировании и размонтировании

  return (
    <div>
      <p className='count'>Счетчик: {count}</p>
      <button className="countbotton2" onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}

export default Primer16;