function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    res.style.textAlign = 'center'
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <13) {
                //Criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 19) {
                //Adolescente
                img.setAttribute('src', 'imagens/foto-adolescente-m.png')
            } else if (idade < 61) {
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <13) {
                //Criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 19) {
                //Adolescente
                img.setAttribute('src', 'imagens/foto-adolescente-f.png')
            } else if (idade < 61) {
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)
    }
}
