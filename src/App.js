import { useState } from 'react'

import './App.css'

import SearchBar from './components/searchBar'
import SearchResults from './components/searchResults'
import Playlist from './components/playlist'

function App () {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <div className='container'>
        <SearchResults tracks={searchResults} />
        <Playlist />
      </div>
    </div>
  )
}

export default App
