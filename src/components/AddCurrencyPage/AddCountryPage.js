import React from 'react'
import Search from './Search'
import './AddCountryPage.css'
import CurrencyList from './CurrencyList'

function AddCountryPage(props) {
  const [searchInput, setSearchInput] = React.useState('')
  let fillterList = props.ratesList
  if (searchInput.length > 1) {
    const findList = props.ratesList.filter(item => item.shortName.includes(searchInput) || item.fullName.includes(searchInput))
    if (findList === []) console.log("can't find keywords")
    else {
      fillterList = findList
    }
  }

  return (
    <div>
      <Search setSearchInput={setSearchInput} />
      <CurrencyList setPickedCountryList={props.setPickedCountryList} fillterList={fillterList} />
    </div>
  )
}

export default AddCountryPage
