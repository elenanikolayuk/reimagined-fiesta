import React from "react";


class MyComponent extends React.Component {
    constructor (props) {
      super(props)
      this.state = { count: 0 }
      this.increment = this.increment.bind(this)
    }
  
    increment () {
      this.setState({ count: this.state.count + 1 })
    }
  
    componentDidMount () {
      // Здесь можно выполнять запросы к серверу.
      console.log('Компонент был смонтирован!')
    }
  
    render () {
      return (
        <div>
          <p className='count'>Счетчик: {this.state.count}</p>
          <button className="countbotton" onClick={this.increment}>+1</button>
        </div>
      )
    }
  }

  export {MyComponent}