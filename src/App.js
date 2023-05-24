import { useState } from 'react'

import './App.css'

import SearchBar from './components/searchBar'
import SearchResults from './components/searchResults'
import Playlist from './components/playlist'

function App () {
  const [searchResults, setSearchResults] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [playlistName, setPlaylistName] = useState('New Playlist')
  // console.log('addPlaylist', playlist)

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
