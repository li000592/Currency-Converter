import getDate, {getCurrenciesLongName} from './getData'

export async function convertMoney(shortName, setNumber) {
  const ratesList = await convertData('')
  shortName = shortName.toUpperCase()
  const index = ratesList.findIndex(obj => obj.shortName === shortName)
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
  const updateTime = localStorage.getItem('updateTime')
  const dateNow = new Date()
  const convertNow = `${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDate()}`
  if (updateTime === convertNow) {
    return
  }
  const ratesList = []
  // get curreny full name list
  const longNameList = await getCurrenciesLongName().symbols
  const data = await getDate()
  // keep update time in localStorage
  localStorage.setItem('updateTime', data.date)
  const key = Object.keys(data.rates)
  const values = Object.values(data.rates)
  for (let i = 0; i < key.length; i++) {
    const shortName = key[i]
    ratesList.push({
      shortName: key[i],
      fullName: longNameList[shortName],
      exchangeNumber: values[i],
    })
  }

  return ratesList
}

export default convertMoney
