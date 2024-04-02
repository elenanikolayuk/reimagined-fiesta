import React, { Component, useState } from 'react';


class ErrorBoundaryExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Что-то пошло не так.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Дополнительная информация: {this.state.errorInfo && this.state.errorInfo.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

class Primer15 extends Component {
  render() {
    return (
      <div>
        <h2>Пример использования ErrorBoundary</h2>
        <ErrorBoundaryExample>
          {/* Твой компонент с возможной ошибкой */}
          <ComponentWithError />
        </ErrorBoundaryExample>
      </div>
    );
  }
}

const ComponentWithError = () => {
  const [throwError, setThrowError] = useState(false)

  const handleClick = () => setThrowError(presState => !presState.throwError)

  if (throwError) {
    // Имитация ошибки
    throw new Error('Это ошибка в компоненте ComponentWithError')
  }

  return (
    <div>
      <h3 className='count'>Компонент с возможной ошибкой</h3>
      <button onClick={() => handleClick()}>Генерировать ошибку</button>
    </div>
  )
}

export default Primer15;