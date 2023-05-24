import React from 'react'

import styles from './playlist.module.css'

import Button from './button'
import Track from './track'

export default function Playlist ({ playlist, setPlaylist }) {
  function handleSaveToSpotify (e) {
    e.preventDefault()
    console.log('save to spotify')
  }

  return (
    <div className={styles.container}>
      <h1>Playlist</h1>
      <div>
        {playlist?.map((track, index) => {
          return (
            <div key={index} className={styles.subcontainer}>
              <Track track={track} />
              <Button playlist={playlist} setPlaylist={setPlaylist} track={track} content='-' />
            </div>
          )
        })}
      </div>
      <button type='button' className={styles.btn} onClick={handleSaveToSpotify}>Save To Spotify</button>

    </div>
  )
}
