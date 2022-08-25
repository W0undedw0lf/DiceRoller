document.querySelector('#diceRoller').addEventListener('click', rollDice)
document.querySelector('#pOn').addEventListener('click', pOn)
document.querySelector('#pOff').addEventListener('click', pOff)

function rollDice() {
    var diceSize = document.getElementById('diceSize').value
    var diceBonus = document.getElementById('diceBonus').value
    var rng = parseInt((Math.random()*diceSize)+1)
    document.querySelector('#diceResult').innerText = Number(rng) + Number(diceBonus);
}

function pOn() {
    document.querySelector('header').style.visibility = 'visible'
}

function pOff() {
    document.querySelector('header').style.visibility = 'hidden'
}