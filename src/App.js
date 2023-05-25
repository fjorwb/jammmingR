import { useEffect, useState } from 'react'

import './App.css'

import SearchBar from './components/searchBar'
import SearchResults from './components/searchResults'
import Playlist from './components/playlist'

import getUserPlaylists from './utils/getUserPlaylists'

function App () {
  const [searchResults, setSearchResults] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [userPlaylists, setUserPlaylists] = useState([])

  useEffect(() => {
    getUserPlaylists()
      .then(data => {
        // console.log(data)
        setUserPlaylists(data)
      })
      .catch(error => console.log(error))
  }, [])

  console.log('userList ', userPlaylists)

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <div className='container'>
        <SearchResults tracks={searchResults} playlist={playlist} setPlaylist={setPlaylist} />
        <Playlist playlist={playlist} setPlaylist={setPlaylist} playlistName={playlistName} setPlaylistName={setPlaylistName} />
      </div>
    </div>
  )
}

export default App
