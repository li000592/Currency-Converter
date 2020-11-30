import React, {useState, useEffect} from 'react'
import convertMoney from './convertMoney'
import './App.css'
import InstallPWA from './components/PWAInstallation/InstallPwa'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import useLocalStorage from './useLocalStorage'
const AddCountryPage = React.lazy(() =>
  import('./components/AddCurrencyPage/AddCountryPage'),
)
const ExchangeCurrencyListPage = React.lazy(() =>
  import('./components/ExchangeCurrencyListPage/ExchangeCurrencyListPage'),
)

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
  const [loginCount, SetLoinCount] = useLocalStorage('loginCount', 0)
  const [pickedCountryList, setPickedCountryList] = useState(
    initializePickedCountryList,
  )
  console.log(ratesList)
  useEffect(() => {
    if (loginCount === 3) {
      console.log('promo')
    }
    SetLoinCount(count => count + 1)
  }, [])
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
      <React.Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <ExchangeCurrencyListPage
              ratesList={ratesList}
              setInputValue={setInputValue}
              pickedCountryList={pickedCountryList}
            />
            <InstallPWA />
          </Route>

          <Route path="/addNew">
            <AddCountryPage setPickedCountryList={setPickedCountryList} />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default App
