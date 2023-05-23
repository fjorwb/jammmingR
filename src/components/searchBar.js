import React, { useEffect, useState } from 'react'

import styles from './searchBar.module.css'

// import useSpotifySearch from './utils/spotify'

import tracks from '../mocks/tracks.json'

import flatObj from '../utils/flattenObject'
import getTracks from '../utils/tracks'

export default function SearchBar ({ setSearchResults }) {
  const [search, setSearch] = useState('')
  const [searchTerms, setSearchTerms] = useState('')

  console.log(search)
  console.log(searchTerms)
  // const { results, loading, error } = useSpotifySearch('italian', 'playlist')
  // console.log(Object.entries(results))
  // console.log(loading, error)

  function handleChange (e) {
    setSearch(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    setSearchTerms(search)
    console.log('submitted')
  }

  const data = flatObj(tracks)
  console.log('data', data)
  const data1 = getTracks(data)
  console.log('data1', data1)

  useEffect(() => {
    setSearchResults(data1)
  }, [])

  return (
    <div className={styles.container}>
      {/* <h1>Search Bar</h1> */}
      <form className={styles.searchForm}>
        {/* <label htmlFor='search' className={styles.label}>Search</label> */}
        <input type='text' id='search' className={styles.input} onChange={handleChange} placeholder='enter track' />
        <button type='submit' className={styles.btn} onClick={handleSubmit}>search</button>
      </form>
    </div>
  )
}
