import React from 'react'

import styles from './track.module.css'

export default function track ({ track }) {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <h3 className={styles.trackname}>{track.name}</h3>
      </div>

      {/* <p>{track.id}</p> */}
      {/* <h3>{track.album.name}</h3> */}
      {/* <h3>{track.artists[0].name}</h3> */}
      <p className={styles.details}><span>{track.artists[0].name}</span><span> | </span><span>{track.album.name}</span></p>
    </div>
  )
}
