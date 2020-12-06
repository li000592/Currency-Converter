import React from 'react'
import './CurrencyListItem.css'
import {NavLink} from 'react-router-dom'
import flagPlaceholder from '../../flagPlaceholder.svg'

function CurrencyListItem(props) {
  const flagImage = `https://flagcdn.com/w160/${props.item.shortName.slice(0, 2).toLowerCase()}.png`
  // const flagImage = 'https://www.countryflags.io/' + props.item.shortName.slice(0, 2) + '/flat/64.png'
  const addNewCurrency = ev => {
    props.setPickedCountryList(list => list.concat({index: ev.target.id}))
  }

  return (
    <div className="card">
      <img onError={ev => (ev.target.src = flagPlaceholder)} className="avatar" src={flagImage} alt="avatar" />
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
