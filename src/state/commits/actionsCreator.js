import { parseISO, format } from 'date-fns'

const githubToken = process.env.REACT_APP_GITHUB_TOKEN

export default (dispatch) => ({
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

    const commits = json.commits.map(({ commit, sha, html_url: url }) => ({
      key: sha,
      title: commit.message,
      url,
      pushedDate: format(parseISO(commit.committer.date), 'MM/dd/yyyy HH:mm'),
      date: parseISO(commit.committer.date),
    })).sort((current, next) => new Date(next.date) - new Date(current.date))


    dispatch({
      type: 'FETCH_LIST',
      payload: commits,
    })
  },
})
