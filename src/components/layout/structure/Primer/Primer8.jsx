import React, { useState } from 'react';

const Primer8 = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  }

  return (
    <div>
      <button className="countbotton2" onClick={handleClick}>Показать/скрыть текст</button>
      {showText && <p className='count'>Этот текст может быть скрыт или показан</p>}
    </div>
  );
}
export default Primer8
