import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so fallback UI is shown
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to a service like Sentry
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <p>This part of the app failed to load.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
