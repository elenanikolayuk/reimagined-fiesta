
import React, { useRef, useState } from 'react';
import List from './List';

const Primer25 = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const [listData, setListData] = useState(['Яблоко', 'Банан', 'Груша']);

  const handleFocusButtonClick = () => {
    inputRef.current.focus();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log("Изменить значение")
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      setListData([...listData, inputValue]);
      setInputValue('');
      console.log(`нажатие клавиши 'enter'`)
    }
  };

  const handleClick = (index) => {
    const newListData = [...listData];
    newListData[index] = !newListData[index];
    setListData(newListData);
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={inputValue}
        type="text"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown} 
      />
      <button onClick={()=>handleFocusButtonClick()} >Фокус</button>
      click to focus
      <List data={listData} handleClick={handleClick} />
    </div>
  );
};

export default Primer25;