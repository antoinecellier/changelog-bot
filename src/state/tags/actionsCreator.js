/* eslint-disable no-await-in-loop */
import parseLinkHeader from 'parse-link-header'

const githubToken = process.env.REACT_APP_GITHUB_TOKEN

export default (dispatch) => ({
  list: async () => {
    const pagination = {
      next: { url: 'https://api.github.com/repos/zenika/ices/tags?page=1&per_page=100' },
    }

    const tags = []
    while (pagination.next) {
      const rep = await fetch(
        pagination.next.url,
        {
          headers: {
            authorization: `Bearer ${githubToken}`,
            Accept: 'application/vnd.github.cloak-preview',
          },
        },
      )

      const json = await rep.json()
      pagination.next = parseLinkHeader(rep.headers.get('Link')).next
      tags.push(...json)
    }

    console.log(tags)

    dispatch({
      type: 'FETCH_LIST',
      payload: tags,
    })
  },
  selectTag: async (tag) => {
    dispatch({
      type: 'SELECT_TAG',
      payload: tag,
    })
  },
})
