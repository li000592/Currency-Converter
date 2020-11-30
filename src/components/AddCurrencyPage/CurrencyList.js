import React from 'react'
import CurrencyListItem from './CurrencyListItem'

function CurrencyList() {
  const listData = localStorage.getItem('currencyFullName')

  console.log(listData)
  return <CurrencyListItem></CurrencyListItem>
}

export default CurrencyList
