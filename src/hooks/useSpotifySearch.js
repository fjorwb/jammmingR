import { useState, useEffect } from 'react'
import axios from 'axios'

// Custom hook for searching artists, albums, and playlists
const useSpotifySearch = (query, type) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const search = async () => {
      setLoading(true)
      setError(null)

      try {
        // Get the access token
        const tokenUrl = 'https://accounts.spotify.com/api/token'
        const clientId = `${process.env.REACT_APP_CLIENT_ID}`
        const clientSecret = `${process.env.REACT_APP_CLIENT_SECRET}`
        const credentials = btoa(`${clientId}:${clientSecret}`)

        const tokenHeaders = {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }

        const tokenData = new URLSearchParams()
        tokenData.append('grant_type', 'client_credentials')

        const response = await axios.post(tokenUrl, tokenData, { headers: tokenHeaders })
        const accessToken = response.data.access_token

        // Search for artists, albums, and playlists
        const searchUrl = 'https://api.spotify.com/v1/search'
        const headers = {
          Authorization: `Bearer ${accessToken}`
        }

        const params = {
          q: query,
          type
        }

        const searchResponse = await axios.get(searchUrl, { headers, params })

        if (isMounted) {
          setResults(searchResponse.data)
          console.log(searchResponse.data)
          setLoading(false)
        }
      } catch (error) {
        if (isMounted) {
          setError(error)
          setLoading(false)
        }
      }
    }

    if (query) {
      search()
    }

    return () => {
      isMounted = false
    }
  }, [query, type])

  return { results, loading, error }
}

export default useSpotifySearch
