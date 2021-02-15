// setTimeout()

// const speechBubble = document.querySelector('.bubble')

// const time = 3000

// function showText() {
//   speechBubble.innerHTML = 'Hey'
// }

// setTimeout(showText, time)

// function deleteText() {
//   speechBubble.innerHTML = ''
// }

// setTimeout(deleteText, 5000)

////////////////////////////////////////////
////////////////////////////////////////////

// setInterval()

const speechBubble = document.querySelector('.bubble')

const text = 'Alert! 🚨'
const time = 2000

function showAlert() {
  const textDisplay = document.createElement('div')
  textDisplay.innerHTML = text
  speechBubble.appendChild(textDisplay)
}

// setInterval(() => {
//   showAlert()
// }, time)

// const timerId = setInterval(() => {
//   console.log('Xavi!')
// }, 2000)

///////////////////////////////

// clearInterval() will stop the interval (interval needs to be inside a constant)
