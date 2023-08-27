var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
if (minuto < 10) {
    console.log(`Agora são exatamente ${hora}:0${minuto}!`)
} else {
    console.log(`Agora são exatamente ${hora}:${minuto}!`)
}

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}