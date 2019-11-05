import React from 'react'

import {ErrorBoundary} from './ErrorBoundary'

export const Root = () => {
  return (
    <ErrorBoundary fallback={<h1>Oops! Something went wrong.</h1>}>
      <h1>Foo</h1>
    </ErrorBoundary>
  )
}
