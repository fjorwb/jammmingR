const clientId = `${process.env.REACT_APP_CLIENT_ID}` // Insert client ID here.
const redirectUri = 'http://localhost:3000' // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken

export default function getAccessToken () {
  // console.log(clientId)
  // console.log(redirectUri)

  // console.log(accessToken)

  if (accessToken) {
    return accessToken
  }

  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
  if (accessTokenMatch && expiresInMatch) {
    accessToken = accessTokenMatch[1]
    // console.log(accessToken)

    const expiresIn = Number(expiresInMatch[1])
    window.setTimeout(() => { accessToken = '' }, expiresIn * 1000)
    window.history.pushState('Access Token', null, '/')
    // console.log(accessToken)
    return accessToken
  } else {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
    window.location = accessUrl
  }
}
