const btn = document.getElementById('btn')


btn.addEventListener('click', () => {
  window.location.href = "https://www.javascript.info"
})


let counter = 0

function appendCounterDisplay() {
  const title = document.createElement('h2')
  title.innerText = `You have missed ${counter} times!`
  document.body.appendChild(title)
}

function updateCounterDisplay() {
  const countSpan = document.getElementById('count-span')
  if (counter <= 1) {
    countSpan.innerText = `You have missed ${counter} time...`
  } else {
    countSpan.innerText = `You have missed ${counter} times!!!`
  }
}

btn.addEventListener('mouseover', () => {
  // You can also use return to stop the code earlier in function
  // if (counter == 3) {
  //   return
  // }

  if (counter < 3) {
    // generate random number:
    const randomX = Math.random() * window.innerWidth // 388.5
    const randomY = Math.random() * window.innerHeight // 500
    // make the button run away
    btn.style.left = `${randomX}px` // string interpolation
    btn.style.top = randomY + 'px'
    // updateCounterDisplay()

    // increase the counter by 1 each time the button is touched
    // you can also use shorthand: counter++
    counter = counter + 1
    console.log(counter)
    updateCounterDisplay()
    // appendCounterDisplay()
  }
})


console.log('game has started, counter is', counter)


/**
 * Math.random() gives you random value
 * from 0.00000001 to 0.99999999
 *
 * Math.random() * 10 will give you:
 * from 0.0000001 to 9.999999
 *
 * Math.random() * 250 will give you:
 * from 0.0000025 to 249.999975
 */