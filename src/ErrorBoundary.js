import React from 'react'

export class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    return {error}
  }
  state = {error: undefined}
  render() {
    if (this.state.error) {
      return this.props.fallback
    }

    return this.props.children
  }
}
