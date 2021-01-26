const formatTime = (date) => {
  // Convert UNIX timestamp in to JS Date object
  const givenDate = new Date(date * 1000)
  // amPM toggle default at AM
  let amPm = 'AM'
  let hours = givenDate.getHours()
  const minutes = givenDate.getMinutes()
  if (hours > 12) {
    // Convert to 12 hour clock
    hours -= 12
    amPm = 'PM'
  }
  return `${hours}:${minutes} ${amPm}`
}

const formatTwelveHour = (time) => {
  console.log(time)
  const newDate = new Date(time)
  const hours = newDate.getHours()
  if (hours > 12) {
    return `${hours - 12} PM`
  } else if (hours === 12) {
    return `${hours} PM`
  } else if (hours === 0) {
    return '12 AM'
  }
  return `${hours} AM`
}
const formatDate = (date) => {
  const day = date.slice(8, 10)
  const month = date.slice(5, 7)
  const year = date.slice(0, 4)
  return `${month} -  ${day} - ${year}`
}
export { formatTime, formatDate, formatTwelveHour }
