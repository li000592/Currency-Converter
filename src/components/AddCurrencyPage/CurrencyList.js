import React from 'react'
import CurrencyListItem from './CurrencyListItem'

function CurrencyList(props) {
  return props.ratesList.map(item => {
    return <CurrencyListItem item={item} setPickedCountryList={props.setPickedCountryList} key={item.index} />
  })
}

export default CurrencyList
