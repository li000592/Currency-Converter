const BASIC_URL = 'https://data.fixer.io/api/'
const KEY = '34864e2bc429d71698ea8a4054622036'

export const getRatesData = async () => {
  const url = `${BASIC_URL}latest?access_key=${KEY}`
  console.log(url)
  const response = await fetch(url)
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}
export const getCurrenciesLongName = async () => {
  const url = BASIC_URL + 'symbols?access_key=' + KEY
  const response = await fetch(url)
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}
export const getData = async () => {
  // get time
  const dateNow = new Date()
  const updateTime = localStorage.getItem('updateTime')
  // getMoth start from 0, so +1
  const convertNow = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`
  // get localStorage
  const localData = localStorage.getItem('ratesList')
  // if it has data update today, return it
  if (localData && updateTime === convertNow) {
    return localData
  } else {
    // else get new data and save it in localStorage
    const data = await getRatesData()
    const rateList = await data.rates
    // save new data in localStorage
    window.localStorage.setItem('updateTime', data.date)
    window.localStorage.setItem('ratesList', JSON.stringify(data.rates))
    return JSON.stringify(rateList)
  }
}

export default getData
