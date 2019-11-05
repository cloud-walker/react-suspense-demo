import React from 'react'

import {wrapPromise} from './wrapPromise'
import {fetchGithub} from './fetchGithub'

const createRepoResource = repoId =>
  wrapPromise(fetchGithub(`/repos/${repoId}`))
const createRepoContribsResource = repoId =>
  wrapPromise(fetchGithub(`/repos/${repoId}/contributors`))

const prepareInitialData = repoId => {
  return {
    repo: createRepoResource(repoId),
    contribs: createRepoContribsResource(repoId),
  }
}

const RepoDetails = ({repo}) => {
  const json = repo.read()
  return <h1>{json.name}</h1>
}

const RepoContributors = ({contribs}) => {
  const json = contribs.read()
  return (
    <article>
      <h1>Contributors</h1>
      {!json.length ? (
        <p>No contributors!</p>
      ) : (
        <ul>
          {json.map(({login, id}) => {
            return <li key={id}>{login}</li>
          })}
        </ul>
      )}
    </article>
  )
}

const {repo, contribs} = prepareInitialData('facebook/react')
export const RepoPage = () => {
  return (
    <>
      <RepoDetails repo={repo} />
      <hr />
      <RepoContributors contribs={contribs} />
    </>
  )
}
