import React from "react";

const handleChange = (event) => {
    console.log('Изменилось значение:', event.target.value);
  }
  
  const Primer19 = () => {
    return (
      <input className="countbotton3" type="text" onChange={handleChange} />
    );
  }

  export {Primer19}
