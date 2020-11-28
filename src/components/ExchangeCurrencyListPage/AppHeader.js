import React from 'react'
// import { NavLink } from 'react-router-dom'
import './AppHeader.css'
function AppHeader(){
    return <header>
        <p className='headerTxt'> Currency Converter</p>
        <a to='/addNew' className='addNewBtn'> + </a>
    </header>
}

export default AppHeader