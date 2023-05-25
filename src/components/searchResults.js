import React from 'react'

import TrackList from './tracklist'

import styles from './searchResults.module.css'

function SearchResults ({ tracks, playlist, setPlaylist }) {
  return (
    <div>
      <div className={styles.titlecontainer}>
        <h1 className={styles.title}>Search Results</h1>
      </div>
      <div className={styles.container}>
        <TrackList tracks={tracks} playlist={playlist} setPlaylist={setPlaylist} />
      </div>
    </div>
  )
}

export default SearchResults
