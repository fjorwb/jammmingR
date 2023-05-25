import getAccessToken from './getSpotifyAccessToken'
// import getUserPlaylists from './getUserPlaylists'

export default function savePlaylistToSpotify (name, trackUris) {
  if (!name || !trackUris.length) {
    return
  }

  const list = trackUris.map(track => track.uri)

  const accessToken = getAccessToken()
  const headers = { Authorization: `Bearer ${accessToken}` }
  let userId

  return fetch('https://api.spotify.com/v1/me', { headers }
  ).then(response => response.json()
  ).then(jsonResponse => {
    userId = jsonResponse.id
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers,
      method: 'POST',
      body: JSON.stringify({ name })
    }).then(response => response.json()
    ).then(jsonResponse => {
      const playlistId = jsonResponse.id
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
        headers,
        method: 'POST',
        body: JSON.stringify({ uris: list })
      })
    })
  })
}
