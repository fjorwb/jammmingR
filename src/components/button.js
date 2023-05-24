import React from 'react'

import styles from './button.module.css'

export default function Button ({ track, playlist, setPlaylist, content }) {
  function handleAddTrack () {
    if (playlist.some(item => item.id === track.id)) return
    setPlaylist(prev => [...prev, track])
  }

  function handleRemoveTrack () {
    setPlaylist(prev => prev.filter(item => item.id !== track.id))
  }

  return (
    <button
      type='button'
      className={styles.btn} value={track}
      onClick={content === '+' ? handleAddTrack : handleRemoveTrack}
    >{content}
    </button>
  )
}
