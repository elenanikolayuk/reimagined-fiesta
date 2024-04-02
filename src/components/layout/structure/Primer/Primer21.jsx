import React from "react";

const handleMouseOver = () => {
    console.log('Курсор наведен!');
  }
  
  const Primer21 = () => {
    return (
      <div className="countbotton2" onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
    );
  };
    export {Primer21}