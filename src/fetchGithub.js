export const fetchGithub = async url => {
  const res = await fetch(`https://api.github.com${url}`)

  if (res.status != 200) {
    throw new Error(`Github API returned Error ${res.status}`)
  }

  return res.json()
}
