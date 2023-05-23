import React from 'react'

import Track from './track'

export default function TracksList ({ tracks }) {
  return (
    <div>
      <ul>
        {tracks.map(track => {
          return (
            <li key={track.id}>
              <Track track={track} />
            </li>
          )
        }
        )}
      </ul>

    </div>
  )
}
