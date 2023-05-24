import React from 'react'

import TrackList from './tracklist'

import styles from './searchResults.module.css'

function SearchResults ({ tracks, playlist, setPlaylist }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Results</h1>
      <TrackList tracks={tracks} playlist={playlist} setPlaylist={setPlaylist} />
    </div>
  )
}

export default SearchResults
