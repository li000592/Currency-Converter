import React from 'react'
import './CurrencyListItem.css'
import { NavLink } from 'react-router-dom'

function CurrencyListItem(props) {
    // onSave = (ev) =>{
      
    // }
    return (
        <div className="card">

      
        <img
          className="avatar"
          src=''
          alt="avatar"
        />

      <div className ='countryName'>
        <h3>ABC</h3>
        <p className='fullName'>abcdef</p>
      </div>

      <NavLink to='/' className='addNewCountryBtn'>+</NavLink>

    </div>
    )
}

export default CurrencyListItem