import React from 'react'
import './ExchangeCurrencyListPage.css'
import AppHeader from './AppHeader'
import ListItem from './ListItem'

function EchangeCurrencyListPage(props) {
  console.log(props.ratesList)
  console.log(props.pickedCountryList)
  if (props.ratesList === undefined || props.ratesList.length === 0) return null
  return (
    <div>
      <AppHeader />
      {props.pickedCountryList.map(item => {
        return (
          <ListItem
            shortName={props.ratesList[item.index].shortName}
            fullName={props.ratesList[item.index].fullName}
            exchangeNumber={props.ratesList[item.index].exchangeNumber}
            key={item.index}
            setInputValue={props.setInputValue}
          />
        )
      })}
    </div>
  )
}

export default EchangeCurrencyListPage
