import React from 'react'
import './ListItem.css'
import flagPlaceholder from '../../flagPlaceholder.svg'

function ListItem(props) {
  const flagImage = `https://flagcdn.com/w160/${props.shortName.slice(0, 2).toLowerCase()}.png`
  function inputChanged(ev) {
    const valueObject = []
    document.querySelectorAll('.exchangeNumber').forEach(div => {
      valueObject.push(div.value)
    })
    const isValue = valueObject.filter(element => {
      return element !== ''
    })
    props.setInputValue({index: ev.target.id, exchangeNumber: isValue[0]})
    setTimeout(() => {
      document.querySelectorAll('.exchangeNumber').forEach(element => (element.value = ''))
    }, 2000)
  }
  const onError = ev => {
    ev.target.src = flagPlaceholder
  }
  return (
    <div className="card">
      <img onError={onError} className="avatar" src={flagImage} alt="avatar" />
      <div className="countryName">
        <h3>{props.shortName}</h3>
        <p className="fullName">{props.fullName}</p>
      </div>
      <div className="inputValue">
        <input
          type="tel"
          className="exchangeNumber"
          id={props.index}
          placeholder={Math.round(props.exchangeNumber * 100) / 100}
          onChange={inputChanged}
        ></input>
      </div>
    </div>
  )
}

export default ListItem
