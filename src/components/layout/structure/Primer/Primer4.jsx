import React from "react";

// Родительский компонент
const Primer4 = () => {
    const message = "Привет, МИР!";
    return <Childcomponent message={message} />;
  }
  
  // Дочерний компонент
  const Childcomponent = (props) => {
    return <div className='count'>{props.message}</div>;
  }

  export {Primer4}