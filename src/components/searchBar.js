import React, { useEffect, useState } from 'react'

import styles from './searchBar.module.css'

import useSpotifySearch from '../hooks/useSpotifySearch'

// import tracks from '../mocks/tracks.json'

import flatObj from '../utils/flattenObject'
import getTracks from '../utils/getTracks'
// import track from './track'

let data
let data1

export default function SearchBar ({ searchResults, setSearchResults }) {
  const [search, setSearch] = useState('')
  const [searchTerms, setSearchTerms] = useState('')

  console.log('search ', search)
  console.log('searchTerms ', searchTerms)

  const { results } = useSpotifySearch(searchTerms, 'track')
  console.log(results)
  console.log(Object.entries(results))
  // console.log(loading, error)

  function handleChange (e) {
    setSearch(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    // console.log(search)
    setSearchTerms(search)
    console.log('submitted')
  }

  useEffect(() => {
    data = flatObj(results)
    console.log('data', data)
    data1 = getTracks(data)
    console.log('data1', data1)
  }, [results])

  useEffect(() => {
    setSearchResults(data1[1])
  }, [results])

  console.log(searchResults)

  return (
    <div className={styles.container}>
      {/* <h1>Search Bar</h1> */}
      <form className={styles.searchForm}>
        {/* <label htmlFor='search' className={styles.label}>Search</label> */}
        <input type='text' id='search' className={styles.inputsearch} onChange={handleChange} placeholder='enter track' />
        <button type='submit' className={styles.btn} onClick={handleSubmit}>search</button>
      </form>
    </div>
  )
}
