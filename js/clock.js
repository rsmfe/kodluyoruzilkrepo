function insertName() {
    let nameInput = prompt("Isim bilgisi giriniz")
    let nameDOM = document.querySelector('#myName')

    nameDOM.innerHTML = nameInput
}

function insertTime() {
    let clockDOM = document.querySelector('#myClock')

    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let day = date.getDay()
    let strDay = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    clockDOM.innerHTML = `${h}:${m}:${s} ${strDay[day]}`
    setInterval(insertTime,1000)
}

insertName()
insertTime()