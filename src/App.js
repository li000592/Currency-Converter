import React, {useState, useEffect} from 'react'
import ExchangeCurrencyListPage from './components/ExchangeCurrencyListPage/ExchangeCurrencyListPage'
import convertMoney from './convertMoney'
import './App.css'
import AddCountryPage from './components/AddCurrencyPage/AddCountryPage'
// import InstallPWA from './components/PWAInstallation/InstallPwa'
import { HashRouter as Router, Route} from "react-router-dom"

const initializeRatesList = [
  {shortName: 'CAD', fullName: 'Canadian Dollar', exchangeNumber: 1.552062},
  {shortName: 'HKD', fullName: 'Hong Kong Dollar', exchangeNumber: 9.191995},
  {shortName: 'TWD', fullName: 'New Taiwan Dollar', exchangeNumber: 33.842415},
]
const initializePickedCountryList = [
  {shortName: 'CAD', index: 0},
  {shortName: 'HKD', index: 1},
  {shortName: 'TWD', index: 2},
  {shortName: 'CAD', index: 3},
  {shortName: 'HKD', index: 4},
  {shortName: 'TWD', index: 5},
]
function App() {
  const [ratesList, setRatesList] = useState([])
  const [pickedCountryList, setPickedCountryList] = useState(
    initializePickedCountryList,
  )
  console.log(ratesList.findIndex(i => i.shortName == 'HKD'))
  const [inputValue, setInputValue] = useState({
    shortName: 'hkd',
    exchangeNumber: 100,
  })
  useEffect(() => {}, [ratesList])
  useEffect(() => {
    console.log(inputValue)
    convertMoney(inputValue.shortName, inputValue.exchangeNumber).then(list => {
      setRatesList(list)
    })
  }, [inputValue, setRatesList])
  return (
    <Router className="App">
      <Route path='/' exact >
       <ExchangeCurrencyListPage
        ratesList={ratesList}
        setInputValue={setInputValue}
        pickedCountryList={pickedCountryList}
      />
      {/* <InstallPWA /> */}

      </Route>

      <Route path='/addNew'>
        <AddCountryPage />
      </Route>



      
    </Router>
  )
}

export default App
