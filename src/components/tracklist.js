import React from 'react'

import styles from './tracklist.module.css'

import Track from './track'
import Button from './button'

export default function TracksList ({ tracks, playlist, setPlaylist }) {
  return (
    <div>
      <ul>
        {tracks?.map(track => {
          return (
            <li key={track.id} className={styles.container}>
              <Track track={track} />
              <div className={styles.btncontainer}>
                <Button track={track} playlist={playlist} setPlaylist={setPlaylist} content='+' />
              </div>
            </li>
          )
        }
        )}
      </ul>

    </div>
  )
}
