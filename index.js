const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")
const milisegundosEl = document.querySelector("#milisegundos")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const reseteBtn = document.querySelector("#reseteBtn")

let interval;
let hora = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let isPaused = false;

startBtn.addEventListener("click", inciciarCronometro)
pauseBtn.addEventListener("click", pausarCronometro)
resumeBtn.addEventListener("click", continuarCronometro)
reseteBtn.addEventListener("click", resetarCronometro)

function inciciarCronometro () {

    if (interval) {
        return;
    }

    interval = setInterval(() => {
        if (!isPaused) {
            milisegundos += 10

            if (milisegundos === 1000) {
                segundos++
                milisegundos = 0
            }

            if (segundos === 1000) {
                minutos++
                segundos = 0 
            }

           minutosEl.textContent = formatarTempo(minutos)
           segundosEl.textContent = formatarTempo(segundos)
           milisegundosEl.textContent = formatarMilisegundos(milisegundos)
        }
        
    }, 10)

}

function pausarCronometro() {
    isPaused = true
}

function continuarCronometro() {
    isPaused = false
}

function resetarCronometro() {
    clearInterval(interval)
    interval = null;
    minutos = 0
    segundos = 0
    milisegundos = 0
    isPaused = false

    minutosEl.textContent = "00"
    segundosEl.textContent = "00"
    milisegundosEl.textContent = "000"

}

function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo
}

function formatarMilisegundos(tempo) {
    return tempo < 100 ? `${tempo}`.padStart(3, "0") : tempo
}