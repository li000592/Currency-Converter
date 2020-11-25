import React from 'react'
import '../component/Search.css'
import searchIcon from './searchIcon.svg'

function Search(){
    return <header>
        <form className='search'>
            <input  type='text' name="searchCountry" placeholder ='Search Country'/>
            <img src={searchIcon} className='searchIcon' alt='searchIcon'/>
        </form>
    </header>
}

export default Search