import React from "react";

const handleClick = () => {
    console.log('Кликнули!');
  }
  
  const Primer18 = () => {
    return (
      <button className="countbotton2" onClick={handleClick}>Нажми меня</button>
    );
  }

  export {Primer18}
 