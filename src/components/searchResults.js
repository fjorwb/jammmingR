import React from 'react'

import TrackList from './tracklist'

import styles from './searchResults.module.css'

function SearchResults ({ tracks, setPlaylist }) {
  return (
    <div className={styles.container}>
      <h1>Search Results</h1>
      <TrackList tracks={tracks} setPlaylist={setPlaylist} />

    </div>
  )
}

export default SearchResults
