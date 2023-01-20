const pertanyaan = document.getElementById ("pertanyaan")
const jawaban = document.getElementById ("jawaban")

let init = 0

const botSay = (data) => {
    return [
        "Halo, perkenalkan saya hudabot. siapa nama kamu?",
        `halo ${data?.nama}, berapa usia kamu?`,
        `ohh ${data?.usia}, hobi kamu apa?`,
        `waaw sama dong aku juga hobi ${data?.hobi}, btw punya pacar ga?`,
        `ohh ${data?.pacar},yaudah kalau begitu, kita udahan yah?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init === 1) {
      botDelay({ nama:jawaban.value })
    } else if (init === 2) {
      botDelay({ usia:jawaban.value })
    } else if (init === 3) {
      botDelay({ hobi:jawaban.value })
    } else if (init === 4) {
      botDelay({ pacar:jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
  console.log({ usersData:usersData})
  setTimeout(() => {
    pertanyaan.innerHTML = botSay (jawabanUser)[init]
  }, [500])       
  usersData.push(jawaban.value)
  jawaban.value = ""
}


function finishing() {
  pertanyaan.innerHTML = `thank u ya ${usersData[0]} udah main ke hudabot 😁`
  jawaban.value = "siap thanks juga "
}

function botEnd() {
  window.location.reload()
}