import React from 'react'
import CurrencyListItem from './CurrencyListItem'

function CurrencyList(props) {
  let listData = window.localStorage.getItem('currencyFullName')
  listData = JSON.parse(listData).symbols
  const key = Object.keys(listData)
  const values = Object.values(listData)
  const data = key.map((shortName, index) => {
    return {shortName: shortName, fullName: values[index], index: index}
  })
  return data.map(item => {
    return <CurrencyListItem item={item} setPickedCountryList={props.setPickedCountryList} key={item.index} />
  })
}

export default CurrencyList
