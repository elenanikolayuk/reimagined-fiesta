import React from "react";
import { useState } from "react";


const Primer7 = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    return (
      <div className='count'>
        <p className='count'>Счетчик: {count}</p>
        <button className="countbotton" onClick={increment}>+1</button>
      </div>
    );
  };

  export {Primer7}