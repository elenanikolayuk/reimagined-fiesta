import React from "react";

class Primer13 extends React.Component {
    shouldComponentUpdate (nextProps, nextState) {
      // В этом примере компонент будет обновляться только при изменении свойства name.
      return nextProps.name !== this.props.name
    }
  
    componentDidUpdate (prevProps, prevState) {
      // Здесь можно выполнять действия после обновления компонента.
      console.log('Компонент был обновлен!')
    }
  
    render () {
      return <div className='count'>Hello, {this.props.name}!</div>
    }
  }

  export {Primer13}