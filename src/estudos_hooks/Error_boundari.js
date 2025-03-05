import { Component, useEffect, useState } from 'react';
/* eslint-disable */
const s = {
  style: {
    fontSize: '60px',
  },
};
class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Que chato!!!');
    }
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter((s) => s + 1)}>
        Click to increase {counter}
      </button>
    </div>
  );
};

export const HomeErrorBoundaris = () => {
  return (
    <div {...s}>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
    </div>
  );
};
