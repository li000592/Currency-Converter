import React from 'react'
import './ListItem.css'

function ListItem(props) {
  const flagPlaceholder =
    'https://static.wikia.nocookie.net/politicsandwar/images/d/d0/Placeholder_Flag.svg/revision/latest?cb=20181107092148'
  const flagImage =
    'https://www.countryflags.io/' +
    props.shortName.slice(0, 2) +
    '/flat/64.png'
  function OB(ev) {
    const valueObject = []
    document.querySelectorAll('.exchangeNumber').forEach((div, id) => {
      valueObject.push(div.value)
    })
    const isValue = valueObject.filter(element => {
      return element !== ''
    })
    props.setInputValue({shortName: ev.target.id, exchangeNumber: isValue[0]})
    setTimeout(() => {
      document
        .querySelectorAll('.exchangeNumber')
        .forEach(element => (element.value = ''))
    }, 1000)
  }
  return (
    <div className="card">
      <img
        className="avatar"
        src={flagImage instanceof Error ? flagPlaceholder : flagImage}
        alt="avatar"
      />

      <div className="countryName">
        <h3>{props.shortName}</h3>
        <p className="fullName">{props.fullName}</p>
      </div>

      <div className="inputValue">
        <input
          type="tel"
          className="exchangeNumber"
          id={props.shortName}
          placeholder={props.exchangeNumber}
          onChange={OB}
        ></input>
      </div>
    </div>
  )
}

export default ListItem
