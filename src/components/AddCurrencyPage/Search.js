import React from 'react'
import './Search.css'
import searchIcon from './searchIcon.svg'

function Search(props) {
  const serachChanged = ev => {
    props.setSearchInput(document.querySelector('.searchInput').value)
  }
  return (
    <div className="searchPage">
      <form className="search">
        <input className="searchInput" type="text" name="searchCountry" placeholder="Search Country" onChange={serachChanged} />
        <img src={searchIcon} className="searchIcon" alt="searchIcon" />
      </form>
    </div>
  )
}

export default Search
