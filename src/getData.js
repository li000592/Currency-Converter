const BASIC_URL = 'https://data.fixer.io/api/'
const KEY = '34864e2bc429d71698ea8a4054622036'

export const getRatesData = async () => {
  const url = `${BASIC_URL}latest?access_key=${KEY}`
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
  const data = await getRatesData()
  const rateList = await data.rates
  window.localStorage.setItem('updateTime', data.date)
  return JSON.stringify(rateList)
}

export default getData
