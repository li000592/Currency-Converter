import React from 'react'
import CurrencyListItem from './CurrencyListItem'

function CurrencyList(props) {
  return props.fillterList.map(item => {
    return <CurrencyListItem item={item} setPickedCountryList={props.setPickedCountryList} key={item.index} />
  })
}

export default CurrencyList
