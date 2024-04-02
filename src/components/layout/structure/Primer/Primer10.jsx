import React, { useState } from 'react';

const Primer10 = () => {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  }

  const style = {
    color: color
  };

  return (
    <div>
      <button className="countbotton2" onClick={handleClick}>Сменить цвет</button>
      <p className='count2' style={style}>Этот текст может быть красным или синим</p>
    </div>
  );
}

export {Primer10}