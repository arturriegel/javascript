function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    img.src = 'imagens/fotomanha.png'
    document.body.style.backgroundColor = '#EABA95'
} else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/fototarde.png'
    document.body.style.backgroundColor = '#A76B4E'
} else {
    img.src = 'imagens/fotonoite.png'
    document.body.style.backgroundColor = '#17282E'
}
}