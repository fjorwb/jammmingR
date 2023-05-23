import './App.css'

import SearchResults from './components/searchResults'
// import TracksList from './components/tracklist'
import SearchBar from './components/searchBar'
import Playlist from './components/playlist'

// import useSpotifySearch from './utils/spotify'
import flatObj from './utils/flattenObject'
import getTracks from './utils/tracks'

import tracks from './mocks/tracks.json'

function App () {
  // const { results, loading, error } = useSpotifySearch('italian', 'playlist')
  // console.log(Object.entries(results))
  // console.log(loading, error)

  const data = flatObj(tracks)
  console.log('data', data)
  const data1 = getTracks(data)
  console.log('data1', data1)

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar />
      <div className='container'>
        <SearchResults tracks={data1} />
        {/* <TracksList tracks={data1} /> */}
        <Playlist />
      </div>
    </div>
  )
}

export default App
