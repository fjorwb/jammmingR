import React, { useState } from 'react'

import styles from './playlist.module.css'

export default function Playlist () {
  const [playlist, setPlaylist] = useState([])
  console.log(playlist)

  function handleChange (e) {
    setPlaylist(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h1>Playlist</h1>
      <button type='button' className={styles.btn} onChange={handleChange}>Save To Spotify</button>

    </div>
  )
}
