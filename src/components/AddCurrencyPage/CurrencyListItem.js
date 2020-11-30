import React from 'react'
import './CurrencyListItem.css'
import {NavLink} from 'react-router-dom'

function CurrencyListItem(props) {
  const flagPlaceholder =
    'https://static.wikia.nocookie.net/politicsandwar/images/d/d0/Placeholder_Flag.svg/revision/latest?cb=20181107092148'
  const flagImage = 'https://www.countryflags.io/' + props.item.shortName.slice(0, 2) + '/flat/64.png'
  const addNewCurrency = ev => {
    props.setPickedCountryList(list => list.concat({index: ev.target.id}))
  }
  return (
    <div className="card">
      <img className="avatar" src={flagImage instanceof Error ? flagPlaceholder : flagImage} alt="avatar" />
      <div className="countryName">
        <h3>{props.item.shortName}</h3>
        <p className="fullName">{props.item.fullName}</p>
      </div>
      <NavLink to="/" id={props.item.index} className="addNewCountryBtn" onClick={addNewCurrency}>
        +
      </NavLink>
    </div>
  )
}

export default CurrencyListItem
