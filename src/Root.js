import React, {Suspense} from 'react'

import {ErrorBoundary} from './ErrorBoundary'
import {Spinner} from './Spinner'
import {RepoPage} from './RepoPage'

export const Root = () => {
  return (
    <ErrorBoundary fallback={<h1>Oops! Something went wrong.</h1>}>
      <Suspense fallback={<Spinner />}>
        <RepoPage />
      </Suspense>
    </ErrorBoundary>
  )
}
