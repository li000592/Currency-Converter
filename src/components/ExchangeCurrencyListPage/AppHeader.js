import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.css'
function AppHeader(){
    return <header>
        <p className='headerTxt'> Currency Converter</p>
        <NavLink to='/addNew' className='addNewBtn'> + </NavLink>
    </header>
}

export default AppHeader