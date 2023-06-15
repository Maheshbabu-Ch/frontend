import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Navright() {
  return (
    <div id="navright">
      <div id="search">
      <FontAwesomeIcon id='i' icon={faMagnifyingGlass} />
      {/* <input type='search' placeholder="Search Tweetify"></input> */}
      <input type="search" name="search" placeholder="Search"/>
      </div>
    </div>
  )
}
