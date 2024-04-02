const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Форма отправлена!');
  }
  
  const Primer20 = () => {
    return (
      <form onSubmit={handleSubmit}>
        <p className='count'>Введите имя:</p>
        <input className="countbotton3" type="text" /><br /><br />
        <button className="countbotton2" type="submit">Отправить</button>
      </form>
    );
  };
  export {Primer20}