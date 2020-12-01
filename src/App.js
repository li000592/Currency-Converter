import React, {useState, useEffect} from 'react'
import convertMoney from './convertMoney'
import './App.css'
import InstallPWA from './components/PWAInstallation/InstallPwa'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import useLocalStorage from './useLocalStorage'
const AddCountryPage = React.lazy(() => import('./components/AddCurrencyPage/AddCountryPage'))
const ExchangeCurrencyListPage = React.lazy(() => import('./components/ExchangeCurrencyListPage/ExchangeCurrencyListPage'))

const initializePickedCountryList = [{index: 27}, {index: 58}, {index: 145}, {index: 149}, {index: 32}, {index: 33}]
function App() {
  const [ratesList, setRatesList] = useState([])
  const [loginCount, SetLoinCount] = useLocalStorage('loginCount', 1)
  const [pickedCountryList, setPickedCountryList] = useLocalStorage('pickedCountryList', initializePickedCountryList)
  useEffect(() => {
    console.log(loginCount)
    if (loginCount === 3) {
      console.log('prompt')
    }
    SetLoinCount(count => count + 1)
  }, [])
  const [inputValue, setInputValue] = useLocalStorage('lastInputValue', {
    index: 27,
    exchangeNumber: 1.0,
  })
  console.log(inputValue)
  console.log(pickedCountryList)
  useEffect(() => {
    convertMoney(inputValue.index, inputValue.exchangeNumber).then(list => {
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
            <AddCountryPage setPickedCountryList={setPickedCountryList} ratesList={ratesList} />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default App
