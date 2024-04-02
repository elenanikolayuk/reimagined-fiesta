import React, {useState} from "react";


const Primer11 = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <ChildComponent count={count} />
        <button className="countbotton" onClick={increment}>+1</button>
      </div>
    );
  };
  
  const ChildComponent = ({ count }) => {
    return <p className='count'>Счетчик: {count}</p>;
  };

  export {Primer11}