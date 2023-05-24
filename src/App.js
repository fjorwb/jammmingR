import { useState } from 'react'

import './App.css'

import SearchBar from './components/searchBar'
import SearchResults from './components/searchResults'
import Playlist from './components/playlist'

function App () {
  const [searchResults, setSearchResults] = useState([])
  const [playlist, setPlaylist] = useState([])
  // console.log('addPlaylist', playlist)

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <div className='container'>
        <SearchResults tracks={searchResults} setPlaylist={setPlaylist} />
        <Playlist playlist={playlist} setPlaylist={setPlaylist} />
      </div>
    </div>
  )
}

export default App
