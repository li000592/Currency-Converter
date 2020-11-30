import getData, {getCurrenciesLongName} from './getData'

export async function convertMoney(shortName, setNumber) {
  const ratesList = await convertData()
  shortName = shortName.toUpperCase()
  const index = ratesList.findIndex(obj => obj.shortName === shortName)
  if (index === -1) {
    console.warn('FIX IT LATER')
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
  const key = Object.keys(ratesList)
  const values = Object.values(ratesList)
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
