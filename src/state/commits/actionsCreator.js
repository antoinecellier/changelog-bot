import { parseISO, format } from 'date-fns'

const githubToken = process.env.REACT_APP_GITHUB_TOKEN

export default (dispatch, store) => ({
  list: async (previousTag, selectedTag) => {
    const rep = await fetch(
      `https://api.github.com/repos/zenika/ices/compare/${previousTag}...${selectedTag}`,
      {
        headers: {
          authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github.cloak-preview',
        },
      },
    )
    const json = await rep.json()
    const commits = json.commits.map(({ commit, sha, html_url }) => ({
      key: sha,
      title: commit.message,
      url: html_url,
      pushedDate: format(parseISO(commit.committer.date), 'MM/dd/yyyy HH:mm'),
    }))

    dispatch({
      type: 'FETCH_LIST',
      payload: commits,
    })
  },
})
