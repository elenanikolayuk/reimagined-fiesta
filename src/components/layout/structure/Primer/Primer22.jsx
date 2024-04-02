import React from "react";


const handleKeyDown = (event) => {
    console.log('Нажата клавиша:', event.key);
  }
  
  const Primer22 = () => {
    return (
      <input className="countbotton3" type="text" onKeyDown={handleKeyDown} />
    );
  }

  export {Primer22}