import React from 'react'

import styles from './track.module.css'

export default function track ({ track }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.trackname}>{track.name}</h1>
      <p>{track.id}</p>
      <h3>{track.album.name}</h3>
      <h3>{track.artists[0].name}</h3>
    </div>
  )
}
