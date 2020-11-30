import getData, {getCurrenciesLongName} from './getData'

export async function convertMoney(shortName, setNumber) {
  console.log(shortName, setNumber)
  const ratesList = await convertData()
  shortName = shortName.toUpperCase()
  console.log(ratesList)
  const index = ratesList.findIndex(obj => obj.shortName === shortName)
  if (index === -1) {
    return console.warn('FIX IT LATER')
  }
  const percentage = setNumber / ratesList[index].exchangeNumber
  return ratesList.map(rate => {
    return {
      shortName: rate.shortName,
      fullName: rate.fullName,
      exchangeNumber: rate.exchangeNumber * percentage,
    }
  })
}
export const convertData = async () => {
  let newRatesList = []
  const currencyFullName = await getCurrenciesLongName()
  window.localStorage.setItem(
    'currencyFullName',
    JSON.stringify(currencyFullName),
  )
  console.log(currencyFullName)
  //let ratesList = await getData().then(repsonse => JSON.parse(repsonse).rates)
  let ratesList = await getData().then(repsonse => JSON.parse(repsonse))
  console.log(ratesList)
  const key = await Object.keys(ratesList)
  console.log(key)
  const values = await Object.values(ratesList)
  console.log(values)
  for (let i = 0; i < key.length; i++) {
    const shortName = key[i]
    newRatesList.push({
      shortName: key[i],
      fullName: currencyFullName.symbols[shortName],
      exchangeNumber: values[i],
    })
  }

  return newRatesList
}

export default convertMoney
