import React from 'react'
import CurrencyListItem from './CurrencyListItem'

function CurrencyList(props) {
  let listData = window.localStorage.getItem('currencyFullName')
  listData = JSON.parse(listData).symbols
  const key = Object.keys(listData)
  const values = Object.values(listData)
  console.log(listData)
  console.log(key)
  const data = key.map((shortName, index) => {
    return {shortName: shortName, fullName: values[index], index: index}
  })

  console.log(data)
  return data.map(item => {
    return (
      <CurrencyListItem
        item={item}
        setPickedCountryList={props.setPickedCountryList}
        key={item.index}
      />
    )
  })
  //   return <CurrencyListItem data={data}></CurrencyListItem>
}

export default CurrencyList
