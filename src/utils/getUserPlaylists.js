import axios from 'axios'

import getAccessToken from './getSpotifyAccessToken'

const url = 'https://api.spotify.com/v1/me/playlists?limit=50'

export default async function getUserPlaylists () {
  const accessToken = getAccessToken()

  const resp = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  const data = resp.data.items.map(item => {
    return {
      name: item.name
      // id: item.id
    }
  })
  return data
}
