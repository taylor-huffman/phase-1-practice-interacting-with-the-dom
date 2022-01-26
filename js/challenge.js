const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const restart = document.getElementById('restart')
const likesSection = document.querySelector('.likes')
const listOfComments = document.getElementById('list')
const form = document.querySelector('form')
let count = parseInt(counter.textContent)
let countInterval = setInterval(autoCount, 1000)
let numberObject = {}

function updateCounter() {
    counter.textContent = count
}

function subtract(){
    count--
    updateCounter()
}

function add(){
    count++
    updateCounter()
}

function autoCount() {
    count++
    updateCounter()
    }

autoCount()

function pauseAutoCount() {
    if(pause.textContent === ' pause ') {
    clearInterval(countInterval)
    pause.textContent = ' resume '
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
    form.submit.disabled = true
} else {
    countInterval = setInterval(autoCount, 1000)
    pause.textContent = ' pause '
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    form.submit.disabled = false
}
}

    function heartClick(){
        let value = counter.textContent
        numberObject[value] = numberObject[value] || 0
        numberObject[value] += 1
        renderHeartClick()
      }
      function renderHeartClick(){
        likesSection.textContent = ""
        for (let key in numberObject){
          const li = document.createElement("li")
            if (numberObject[key] > 1) {
                li.textContent = `${key} has been liked ${numberObject[key]} times.`
                likesSection.append(li)
            } else {
                li.textContent = `${key} has been liked 1 time.`
                likesSection.append(li)
            }
        }
      }


function addComment(e) {
    e.preventDefault()
    let p = document.createElement('p')
    p.textContent = form.comment_input.value
    listOfComments.appendChild(p)
    form.reset()
}



minus.addEventListener('click', subtract)
plus.addEventListener('click', add)
pause.addEventListener('click', pauseAutoCount)
heart.addEventListener('click', heartClick)
form.addEventListener('submit', addComment)