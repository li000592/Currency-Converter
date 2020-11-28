import React from 'react'
import './ExchangeCurrencyListPage.css'
import AppHeader from './AppHeader'
import ListItem from './ListItem'

function EchangeCurrencyListPage(props) {
  function isPromise(promise) {
    return !!promise && typeof promise.then === 'function'
  }

  if (props.ratesList === undefined || props.ratesList.length == 0) return null

  if (isPromise(props.ratesList)) return <p>WARN</p>
  return <div>
    <AppHeader />
    {props.pickedCountryList.map(item => {
    return (
      
      <ListItem
        shortName={props.ratesList[item.index].shortName}
        fullName={props.ratesList[item.index].fullName}
        exchangeNumber={props.ratesList[item.index].exchangeNumber}
        key={props.ratesList[item.index].shortName}
        setInputValue={props.setInputValue}
      />
    
    )
  })}
    
  </div>
}

export default EchangeCurrencyListPage
