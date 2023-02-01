export const get2DigitTime = (time) => time < 10 ? `0${time}` : `${time}`

export const formatTime = (milliseconds) => {
  const minutes = Math.ceil(milliseconds / (60 * 1000))
  const seconds = Math.ceil(milliseconds / 1000)
  return `${get2DigitTime(minutes)}:${get2DigitTime(seconds)}`
}