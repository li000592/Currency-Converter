import React, {useState, useEffect} from 'react'
import convertMoney from './convertMoney'
import './App.css'
import InstallPWA from './components/PWAInstallation/InstallPwa'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import useLocalStorage from './useLocalStorage'
const AddCountryPage = React.lazy(() => import('./components/AddCurrencyPage/AddCountryPage'))
const ExchangeCurrencyListPage = React.lazy(() => import('./components/ExchangeCurrencyListPage/ExchangeCurrencyListPage'))

const initializePickedCountryList = [
  {shortName: 'CAD', index: 27},
  {shortName: 'HKD', index: 58},
  {shortName: 'TWD', index: 145},
  {shortName: 'USD', index: 149},
  {shortName: 'CNY', index: 32},
  {shortName: 'COP', index: 33},
]
function App() {
  const [ratesList, setRatesList] = useState([])
  const [loginCount, SetLoinCount] = useLocalStorage('loginCount', 0)
  const [pickedCountryList, setPickedCountryList] = useState(initializePickedCountryList)
  useEffect(() => {
    if (loginCount === 3) {
      console.log('promo')
    }
    SetLoinCount(count => count + 1)
  }, [])
  const [inputValue, setInputValue] = useState({
    shortName: 'CAD',
    exchangeNumber: 1.0,
  })

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
            <ExchangeCurrencyListPage ratesList={ratesList} setInputValue={setInputValue} pickedCountryList={pickedCountryList} />
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
