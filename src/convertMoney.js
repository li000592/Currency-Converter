import getData, {getCurrenciesLongName} from './getData'

export async function convertMoney(index, setNumber) {
  let ratesList = await convertData()
  if (typeof ratesList === 'string') {
    ratesList = JSON.parse(ratesList)
  }
  const percentage = setNumber / ratesList[index].exchangeNumber
  return ratesList.map(rate => {
    return {
      index: rate.index,
      shortName: rate.shortName,
      fullName: rate.fullName,
      exchangeNumber: rate.exchangeNumber * percentage,
    }
  })
}
export const convertData = async () => {
  const dateNow = new Date()
  const updateTime = localStorage.getItem('updateTime')
  const convertNow = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`
  const ratesList = localStorage.getItem('ratesList')
  if (ratesList !== null && updateTime === convertNow) {
    return ratesList
  } else {
    let newRatesList = []
    const currencyFullName = await getCurrenciesLongName()
    let ratesList = await getData().then(repsonse => JSON.parse(repsonse))
    const key = await Object.keys(ratesList)
    const values = await Object.values(ratesList)
    for (let i = 0; i < key.length; i++) {
      const shortName = key[i]
      newRatesList.push({
        index: i,
        shortName: key[i],
        fullName: currencyFullName.symbols[shortName],
        exchangeNumber: values[i],
      })
    }
    window.localStorage.setItem('ratesList', JSON.stringify(newRatesList))
    return newRatesList
  }
}

export default convertMoney
