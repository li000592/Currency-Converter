import React from 'react'
import Search from './Search'
import './AddCountryPage.css'
import CurrencyList from './CurrencyList'

function AddCountryPage(props) {
  return (
    <div>
      <Search />
      <CurrencyList setPickedCountryList={props.setPickedCountryList} ratesList={props.ratesList} />
    </div>
  )
}

export default AddCountryPage
